# Crop Doctor AI

A smart crop health diagnosis dashboard designed to help users scan plants, detect visible stress, and receive practical care guidance from a browser-based interface.

Crop Doctor combines browser camera access, image validation, visual plant analysis, and responsive dashboard experience in one lightweight application. It is built for demo use, classroom presentation, field scouting, and quick AI-assisted crop review.

## Project Summary

Crop Doctor helps farmers, students, and researchers quickly assess whether a plant looks healthy or at risk based on visible image indicators such as:

- leaf discoloration
- dark lesion patterns
- fungal or bacterial stress cues
- warm/damaged tissue concentration
- plant and crop identity signals

The app validates that the frame is actually a plant, rejects faces for privacy, and provides a health score together with crop-aware recommendations.

## Live Demo

https://muhammadramiz.github.io/crop-doctor-react/

## Why This Project Matters

Modern agriculture increasingly depends on rapid monitoring and low-cost decision support tools. Crop Doctor addresses this by making crop health checking accessible through a simple interface that works directly in the browser.

This solution is especially useful for:

- quick field inspections
- classroom and research demonstrations
- crop monitoring in remote areas
- early warning for visible plant stress
- simple, browser-based AI evaluation without heavy infrastructure

## Key Features

- Camera capture and image upload support
- Real-time plant frame validation
- Face rejection for privacy protection
- Crop and plant classification using visual cues
- Health scoring for visible crop stress and disease indicators
- Dynamic crop-aware recommendations for common crops and fruits
- Local gallery history with duplicate image detection
- Mobile, tablet, and desktop responsive interface
- GitHub Pages deployment for quick demo hosting

## Responsive Design

The application is designed to work smoothly across multiple screen sizes:

- Mobile view: optimized for phone-based scanning and quick field capture
- Tablet view: balanced viewing with easy interaction for field inspection
- Desktop view: full dashboard layout for demos, presentations, and review workflows

This makes the app practical for both on-site field use and presentation environments.

## Tech Stack

- React 19
- Vite
- JavaScript / JSX
- TensorFlow.js MobileNet
- TensorFlow.js BlazeFace
- IndexedDB for local gallery persistence
- GitHub Pages for deployment

## How It Works

1. The user captures or uploads a plant image.
2. The app checks whether the image contains a face and whether it looks like a plant or crop.
3. The system estimates crop identity using visual pattern matching and crop-specific heuristics.
4. It evaluates stress patterns such as yellowing, dark spots, warm damage, and fungal-like texture.
5. The app produces a health score and practical care guidance for the diagnosed crop.

## Smart Crop Identification

The system is designed to avoid weak generic labels and provide more useful crop-aware outputs. It focuses on better handling of real-world cases such as:

- potato misidentified as corn
- tomato misread as pepper
- generic plant labels replacing specific crop names
- inaccurate leaf-only recommendations for root crops

The current logic prefers crop-specific visual evidence before falling back to a general label, making the output more reliable for common plant and fruit use cases.

## What the App Assesses

- plant presence
- crop or fruit identity
- visual stress and disease indicators
- health score estimate
- practical next steps for care and monitoring

## Local Setup

```bash
npm install
npm run dev
```

Then open the local Vite URL in the browser and either use the camera or upload an image for diagnosis.

## Production Build

```bash
npm run build
```

## Deployment

The project is configured for GitHub Pages static hosting.

```bash
npm run build
npm run deploy
```

## Supported Image Types

- JPG
- PNG
- WebP
- Maximum recommended size: 10 MB

Images that do not clearly look like a plant or crop are rejected before being saved to the gallery.

## Gallery and Persistence

Accepted scans are stored locally in the browser using IndexedDB. Duplicate uploads are filtered using a content hash, and previously analyzed scans can be reopened from the gallery with their diagnosis details.

## Privacy and Ethics

Crop Doctor includes face rejection logic to protect privacy and prevent non-plant subjects from being treated as crop targets. The app processes camera data locally in the browser without sending the image feed to a remote diagnostic service by default.

## Presentation Talking Points

- This project demonstrates AI-powered crop health assessment using affordable, browser-based tools.
- It combines image validation, crop detection, disease heuristics, and actionable recommendations in one dashboard.
- The interface is responsive and supports mobile, tablet, and desktop experience for field and presentation use.
- The app is designed for quick field decisions, early stress detection, and educational demos.
- It provides a practical foundation for future agriculture AI systems with stronger crop-specific classification models.

## Project Status

This project is a prototype and demonstration platform designed for research, presentation, and concept validation. It is suitable for a classroom demo or early-stage product prototype, with room for improved model accuracy and real agricultural dataset expansion.

## Future Improvements

- stronger crop-specific training model
- larger plant and disease dataset
- better health scoring for more crop varieties
- regional crop knowledge and region-specific care plans
- integration with backend analytics and cloud storage

## Contributors

This prototype was developed as a collaborative AI and agriculture project focused on smart crop diagnosis, accessible field tools, and responsive web experience.
