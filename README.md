# Crop Doctor

Crop Doctor is a college project for checking visible crop and plant health from an ESP32-CAM image. The React dashboard captures a frame, asks the connected service to validate it, and displays a health diagnosis only for accepted plant images.

*Note: This project uses automated GitHub Actions deployment.*

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite. Connect the dashboard to the ESP32-CAM IP address, then use the shutter to scan.

Visitors can use **Use this device camera** on the HTTPS GitHub Pages site. The browser will ask for camera permission and prefer the rear camera on mobile devices. Visitors can also choose one or more existing plant images with **Choose plant image**. Selected images use the same plant-only validation, health screening, care plan, and gallery workflow. The first device scan downloads the plant checker model and may take a few seconds. The ESP32-CAM option is intended for a device on the same local network.

Uploaded files must be JPG, PNG, or WebP images smaller than 10 MB, and the plant checker must recognize the image as a plant or crop. Other images are rejected before they enter the gallery. Generic labels such as `Hip`, `Tree`, `Fruit`, `Pot`, and `Plant` are not shown as exact crop names; the gallery uses `Plant / crop` when the general model cannot identify a species reliably.

## Image validation contract

The camera service `/health` endpoint must return JSON with an explicit plant result:

```json
{
	"isPlant": true,
	"containsFace": false,
	"status": "healthy",
	"confidence": 92
}
```

The dashboard rejects an ESP32-CAM frame when `isPlant` or `plantDetected` is not `true`, or when `containsFace` or `faceDetected` is `true`. Device-camera captures use MobileNet for plant/crop classification and BlazeFace for dedicated face detection before an image can enter the gallery. MobileNet is a general ImageNet model, so it cannot reliably identify every crop species. Exact rose, apple, rice, or other crop identification requires a plant-specific model such as PlantNet with a backend/API key. Captures then receive a lightweight color-based visual health estimate for this college prototype. Camera and service errors are shown as rejected scans; no random diagnosis is generated.

## Privacy

Crop Doctor only checks whether a face appears in a frame so that people are not analyzed as crops. It does not infer or display age, gender, identity, or mood, and device-camera frames are processed locally in the browser rather than uploaded by this app.

## Plant gallery

Accepted captures are saved as image blobs in the visitor's browser using IndexedDB. They appear as thumbnails in the Plant gallery and can be deleted individually. Because GitHub Pages is a static host, each visitor has a private gallery on their own device; a shared gallery would require a server database and image storage.

Selecting a thumbnail restores its image, result, confidence, and care plan in the scanner view. Saved scans also repopulate Recent results after a page reload. Identical image files are detected by content hash and are not added to the gallery more than once.

When Supabase is configured, the gallery uses the shared `plant-images` Storage bucket and `scans` table. Create a public bucket with that name, then run this migration in Supabase SQL Editor:

```sql
alter table public.scans
	add column if not exists image_hash text,
	add column if not exists storage_path text;

create unique index if not exists scans_image_hash_key
	on public.scans (image_hash)
	where image_hash is not null;
```

For the public demo, create the `plant-images` bucket as public and add these Storage policies:

```sql
create policy "Anyone can upload plant images"
on storage.objects for insert to anon, authenticated
with check (bucket_id = 'plant-images');

create policy "Anyone can delete plant images"
on storage.objects for delete to anon, authenticated
using (bucket_id = 'plant-images');
```

The frontend uses the Supabase publishable key only. Never put a service-role key in `.env.production` or the browser.

## GitHub Pages

The published site is available at:

https://kaleemullah19.github.io/crop-doctor-react/

To publish a new build:

```bash
npm run deploy
```
 
## Analytics

The project supports free Google Analytics 4 with privacy-conscious event tracking. It records page views and completed plant scans, but never sends camera frames or gallery images.

1. Create a GA4 web data stream and copy its Measurement ID, such as `G-ABC123XYZ`.
2. Copy `.env.example` to `.env.local` and set `VITE_GA_MEASUREMENT_ID`.
3. Run `npm run deploy` with that environment variable available during the build.

Without a Measurement ID, analytics stays disabled automatically.
npm run deploy
```
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)
