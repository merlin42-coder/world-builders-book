## Changes

### 1. Upload hero image to Cloud `images` bucket
- Download `wb-hero-wide.png` from the Lovable CDN to `/tmp`
- Upload it to the `images` bucket via the storage tool as `wb-hero-wide.png`

### 2. `src/pages/Index.tsx` — switch 3 images from Lovable CDN assets to Cloud `images` bucket
Use the existing `STORAGE_BASE` constant for all three:
- **Hero background**: `${STORAGE_BASE}/wb-hero-wide.png` (fixes the missing-image bug on GitHub Pages — the previous `/__l5e/...` URL only resolves on Lovable hosting)
- **Hero book cover**: `${STORAGE_BASE}/world-builders-book-cover.png`
- **Greg portrait (About the Creator)**: `${STORAGE_BASE}/GregGurmai.jpg`

Remove the three now-unused asset imports (`heroAsset`, `coverAsset`, `gregAsset`).

### 3. Delete the obsolete `.asset.json` pointer files
- `src/assets/wb-hero-wide.png.asset.json`
- `src/assets/world-builders-cover.png.asset.json`
- `src/assets/greg-gurmai.jpg.asset.json`

### 4. `index.html` — update `og:image` to an absolute Supabase URL
```
https://qpaxslkyjklwcfoudfme.supabase.co/storage/v1/object/public/images/World-Builders-Book-social.png
```
(Social crawlers require an absolute URL — relative paths like `images/...` won't preview.)

### Result
All images load on both the Lovable preview and the GitHub Pages deployment, since every URL is now an absolute Cloud storage URL.