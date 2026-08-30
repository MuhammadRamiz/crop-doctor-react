# Crop Doctor

Crop Doctor is a college project for checking visible crop and plant health from an ESP32-CAM image. The React dashboard captures a frame, asks the connected service to validate it, and displays a health diagnosis only for accepted plant images.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite. Connect the dashboard to the ESP32-CAM IP address, then use the shutter to scan.

Visitors can use **Use this device camera** on the HTTPS GitHub Pages site. The browser will ask for camera permission and prefer the rear camera on mobile devices. Visitors can also choose an existing plant image with **Choose plant image**. Selected images use the same plant-only validation, health screening, care plan, and gallery workflow. The first device scan downloads the plant checker model and may take a few seconds. The ESP32-CAM option is intended for a device on the same local network.

Uploaded files must be JPG, PNG, or WebP images smaller than 10 MB.

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

The dashboard rejects an ESP32-CAM frame when `isPlant` or `plantDetected` is not `true`, or when `containsFace` or `faceDetected` is `true`. Device-camera captures are checked locally with MobileNet and reject likely faces and non-plant images. They then receive a lightweight color-based visual health estimate for this college prototype. Camera and service errors are shown as rejected scans; no random diagnosis is generated. A trained crop-health model/API is still recommended for reliable agricultural diagnosis.

## Privacy

Crop Doctor only checks whether a face appears in a frame so that people are not analyzed as crops. It does not infer or display age, gender, identity, or mood, and device-camera frames are processed locally in the browser rather than uploaded by this app.

## Plant gallery

Accepted captures are saved as image blobs in the visitor's browser using IndexedDB. They appear as thumbnails in the Plant gallery and can be deleted individually. Because GitHub Pages is a static host, each visitor has a private gallery on their own device; a shared gallery would require a server database and image storage.

Selecting a thumbnail restores its image, result, confidence, and care plan in the scanner view. Saved scans also repopulate Recent results after a page reload.

## GitHub Pages

The published site is available at:

 https://kaleemullah19.github.io/crop-doctor-react/

To publish a new build:

 ```bash
 npm run deploy
```bash
npm run deploy
```
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)
