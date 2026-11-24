# DOITNOW – Free tools launch

This folder contains the DOITNOW static website frontend.

## Preview locally
Open `index.html` in a browser, or serve this folder with any static web server.

## Publish on GitHub Pages
1. Upload the contents of this folder to the root of your GitHub repository.
2. In GitHub, open **Settings → Pages** and select **GitHub Actions** as the build/deployment source.
3. Add the workflow from `.github/workflows/deploy.yml` (included in this package).

## Important: current functionality
- Homepage, responsive layout, tool navigation, search and tool input screens are frontend features.
- AI processing and NEXORA AI are **not live yet**. They require a backend and provider API key stored only as a server secret.
- `config.js` has an empty `API_BASE`; do not put private API keys in this public repository.
- Login, database, file storage and real processing still need backend implementation.
- Payment, subscriptions and credits are removed from this launch version.
- AdSense placements are not activated. Apply to AdSense first; add the approved publisher script and slot IDs only after approval. Approval and earnings are not guaranteed.

## Before AdSense application
Publish accurate About, Contact, Privacy Policy and Terms pages; provide original helpful content; test all navigation and tools; and ensure privacy disclosures match the actual backend and file-retention behavior. Do not claim files are deleted unless the backend actually enforces deletion.
