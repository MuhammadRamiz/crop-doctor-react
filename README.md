# Crop Doctor

Crop Doctor is a college project for checking visible crop and plant health from an ESP32-CAM image. The React dashboard captures a frame, asks the connected service to validate it, and displays a health diagnosis only for accepted plant images.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite. Connect the dashboard to the ESP32-CAM IP address, then use the shutter to scan.

Visitors can use **Use this device camera** on the HTTPS GitHub Pages site. The browser will ask for camera permission and prefer the rear camera on mobile devices. The first device-camera scan downloads the plant checker model and may take a few seconds. The ESP32-CAM option is intended for a device on the same local network.

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

The dashboard rejects an ESP32-CAM frame when `isPlant` or `plantDetected` is not `true`, or when `containsFace` or `faceDetected` is `true`. Device-camera captures are checked locally with MobileNet and reject likely faces and non-plant images. Camera and service errors are shown as rejected scans; no demo diagnosis is generated. Plant recognition and crop-health diagnosis are separate: browser captures still require a connected crop-health model/API to determine healthy or at-risk status.

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
