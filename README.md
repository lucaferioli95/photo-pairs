# Photo Pairs

Open a folder of photos, see each JPEG together with its RAW file, review them and delete both at once. Runs entirely in the browser, nothing is uploaded.

- Needs a Chromium browser on desktop (Chrome, Edge, Brave, Opera) because it uses the File System Access API to edit the folder.
- Hosting: Cloudflare Workers static assets (`wrangler.jsonc`), deployed automatically on every push to `main`.
- Each release is listed in [CHANGELOG.md](CHANGELOG.md). When shipping, bump `APP_VERSION` in `index.html` and the `CACHE` name in `sw.js`.
