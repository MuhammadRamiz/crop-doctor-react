# Crop Doctor

Crop Doctor is a React + Vite web app for checking plant and crop health from a camera or uploaded image. The app validates that the image is a real plant, rejects non-plant frames, estimates health from visible color and stress patterns, and gives a practical action plan for the crop or plant.

This project is designed for a demo, classroom presentation, and field-friendly prototype workflow. It is not a scientific diagnosis engine, but it demonstrates a real-time crop-health analysis flow in a browser.

## Highlights

- Camera or image upload flow for plant inspection
- Plant-only validation using MobileNet + BlazeFace
- Dynamic crop-aware naming for common plants, vegetables, fruits, and crops
- Disease and stress heuristics for rust, spots, yellowing, fungal patterns, and nutrient stress
- Crop-specific care recommendations
- Local gallery storage with duplicate detection and saved scan history
- GitHub Pages deployment setup for demo hosting

## Live demo

https://muhammadramiz.github.io/crop-doctor-react/

## Tech stack

- React 19
- Vite
- TensorFlow.js MobileNet
- TensorFlow.js BlazeFace
- IndexedDB for browser gallery storage
- GitHub Pages deployment

## How it works

1. A user captures or uploads a plant image.
2. The app checks whether the frame contains a face and whether the image looks like a plant or crop.
3. It uses a general image classifier to estimate the crop/plant type.
4. It evaluates stress patterns such as discoloration, dark spots, warm damaged regions, and yellowing.
5. It returns a health score and a crop-aware care plan.

## Important project logic

The key improvement in the current version is that the app is no longer locked to a single crop assumption. It uses image cues such as warm-toned fruit textures, dark lesion density, yellow ratios, green ratios, and local vegetation color to infer crop identity more intelligently.

This is especially important for cases like:

- rotten potato being labeled incorrectly as corn
- tomato-like fruit being mislabeled as pepper
- generic plant names replacing distinct crop names when the model is uncertain

The logic tries to prefer an exact crop name when the image shows strong crop-specific patterns, while keeping a safe fallback of Plant / crop when the evidence is weak.

## What the app checks

- plant presence
- face rejection for privacy
- visible crop or plant identity
- suspected stress or disease severity
- health score estimate
- crop-specific treatment guidance

## Local setup

```bash
npm install
npm run dev
```

Then open the Vite URL and connect the dashboard to the ESP32-CAM or use the device camera access button.

## Deployment

```bash
npm run build
npm run deploy
```

The project is configured for GitHub Pages static hosting.

## Image / validation requirements

- Accepted formats: JPG, PNG, and WebP
- Maximum file size: 10 MB
- Images that are not clearly plants or crops are rejected before being added to the gallery
- The system protects privacy by rejecting frames where a face is detected

## Gallery and persistence

Accepted scans are stored locally in the visitor browser. Files are deduplicated using a content hash, and saved scans can be reopened from the gallery with their diagnosis and recommendation list.

## Privacy and ethics

Crop Doctor only checks for face-like features to prevent people from being treated as crops. It does not identify people by age, gender, or identity. Device-camera frames are processed locally in the browser, and no camera feed is sent to a remote diagnostic service by default.

## Presentation points for tomorrow

- This project demonstrates how AI can support early crop health checks using low-cost camera inputs.
- It combines plant detection, visual stress analysis, and simple agronomic guidance in one interface.
- The system is designed for field use, mobile access, and quick diagnosis without requiring advanced equipment.
- It already handles a real deployment workflow with GitHub Pages and browser-based processing.
- The dynamic crop logic improves reliability for common crop and fruit cases, including potato, tomato, pepper, and general plant scans.

## Notes

This is a prototype designed for a college project and demo. For production agriculture, a more specialized plant classifier and a larger labeled dataset would improve accuracy across all crop types.
