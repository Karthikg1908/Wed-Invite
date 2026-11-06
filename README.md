# Praveen & Kavya — Wedding Invitation

**Final visual & performance polish (V42.6.55)**

A responsive, GitHub Pages-ready wedding invitation with a royal lavender, plum, ivory, and champagne-gold theme.

- Live invitation: https://karthikg1908.github.io/praveen-weds-kavya/
- Repository: https://github.com/karthikg1908/praveen-weds-kavya

## Highlights

- Silk-curtain welcome reveal (2.5 seconds) with the Ganesha emblem and floral details.
- Hero section using the supplied local photo.
- Local, optimized couple portraits and consistent image sizing on mobile.
- Wedding film in a fine champagne-gold frame, with a subtle play indicator and automatic muted playback when supported by the browser.
- Ten-slide photo carousel with swipe, keyboard, arrows, compact dots, 3.5-second auto-advance, and a lightbox. Auto-advance pauses while the gallery is off-screen, the tab is hidden, the lightbox is open, or the visitor interacts with the gallery.
- Wedding events, countdown, venue photos and Google Maps directions.
- WhatsApp/Open Graph preview metadata and background music.
- Responsive mobile menu and reduced-motion support.

## Project files

```text
praveen-weds-kavya/
├── index.html
├── style.css
├── script.js
├── background-music.mp3
├── wedding-invite.mp4
├── assets/
│   ├── hero-photo.JPG
│   ├── groom-portrait.webp
│   ├── bride-portrait.webp
│   ├── gallery.JPG
│   ├── gallery-2.JPG
│   ├── gallery-3.JPG
│   ├── gallery-4.JPG
│   ├── gallery-5.JPG
│   ├── gallery6.jpg
│   ├── video-poster.webp
│   ├── praveen-kavya-wedding-preview-v2.jpg
│   └── [icons, floral and curtain artwork, venue images]
└── README.md
```

## Photo assets

The hero and uploaded photo assets are resized and compressed for fast page loading. The original high-resolution uploads are provided separately in the **Original Media Backup** archive; keep that archive if you want to preserve full-resolution camera files.

The first six gallery slides use local images. Slides 7–10 are set up with the expected local filenames `gallery7.jpg`, `gallery8.jpg`, `gallery9.jpg`, and `gallery10.jpg`; until those files are added, the site falls back to sample wedding photos from Unsplash. Keep filename capitalization exact on GitHub Pages.

The wedding venue image is `assets/purvaja-samudhaya-bhavana.jpeg`, and the Beegara Oota image is `assets/hb-function-hall.webp`.

## Wedding celebrations

| Occasion | Date | Time |
| --- | --- | --- |
| Reception | Tuesday, 1 December 2026 | 6:30 PM onwards |
| Muhurtham | Wednesday, 2 December 2026 | 9:30 AM |
| Beegara Oota | Sunday, 13 December 2026 | 12:30 PM onwards |

## Publish with GitHub Pages

1. Extract this ZIP.
2. Upload **the contents** (`index.html`, `style.css`, `script.js`, `assets/`, and media files) to the root of the `praveen-weds-kavya` repository. Do not upload an extra enclosing folder or a `.git` directory.
3. In GitHub, open **Settings → Pages**.
4. Choose **Deploy from a branch**, select `main` and `/(root)`, then save.
5. Open the live invitation after the deployment finishes.

For local preview, run a small local server from the extracted folder:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000/.

## WhatsApp preview

The Open Graph image is `assets/praveen-kavya-wedding-preview-v2.jpg` at 1200 × 630. Keep its filename and the public URL referenced by `og:image` unchanged to preserve WhatsApp sharing. Social platforms may cache an older preview after updates.

**✦ Thoughtfully crafted by Karthi ✦**
