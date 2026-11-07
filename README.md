# Praveen & Kavya — Wedding Invitation

A lightweight, responsive South Indian wedding invitation with a warm burgundy, champagne-gold, and ivory colour theme. It is designed for static hosting on GitHub Pages.

## Features

- Ten-second section-by-section auto-scroll with responsive alignment
- Continuous rose, jasmine, and lavender petal animation
- Optional background music with a note-only control
- Opening invitation card that starts music on the visitor's first tap
- Kannada and English wedding messages
- Wedding dates, venue photographs, addresses, and Google Maps directions
- Live wedding and Beegara Oota countdown messages using India Standard Time
- Mobile-friendly photo gallery and sharing controls
- Lightweight pre-wedding film placeholder, ready for a future video
- Background music trimmed to 1 minute 22 seconds for faster loading
- Reduced-motion support

## Project files

```text
praveen-weds-kavya/
├── index.html
├── style.css
├── script.js
├── wedding-music.mp3
├── assets/
│   ├── couple-hero.jpg
│   ├── welcome-hands.jpg
│   ├── venue-purvaja.jpg
│   ├── venue-hb-function-hall.webp
│   ├── moment-scooter.jpg
│   ├── moment-portrait.jpg
│   ├── moment-cooking.jpg
│   ├── social-preview.jpg
│   └── favicon.svg
└── README.md
```

## Wedding celebrations

| Occasion | Date | Time |
| --- | --- | --- |
| Reception | Tuesday, 1 December 2026 | 6:30 PM onwards |
| Muhurtham | Wednesday, 2 December 2026 | 9:30 AM |
| Beegara Oota | Sunday, 13 December 2026 | 12:30 PM onwards |

## Publish with GitHub Pages

1. Extract this ZIP.
2. Upload the contents to the root of the GitHub repository. Do not upload an extra enclosing folder or a `.git` directory.
3. In GitHub, open **Settings → Pages**.
4. Choose **Deploy from a branch**, select `main` and `/(root)`, then save.
5. Open the live invitation after the deployment finishes.

For local preview, run a small local server from the extracted folder:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000/.

## Add the pre-wedding video

The film placeholder is the `#film` section in `index.html`. When the video is ready, replace the `.video-placeholder` element with:

```html
<video class="wedding-video" controls playsinline preload="metadata" poster="assets/moment-portrait.jpg">
  <source src="assets/pre-wedding-film.mp4" type="video/mp4">
</video>
```

Use an H.264 MP4 optimized for the web and keep `preload="metadata"` so the invitation remains lightweight.

## WhatsApp preview

The Open Graph image is `assets/social-preview.jpg`. Social platforms may cache an older preview after updates.
