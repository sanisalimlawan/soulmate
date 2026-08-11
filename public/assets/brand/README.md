# Brand assets

The Soul Mate Properties logo lives in this folder.

## Current logo

**`logo.jpg`** — the client-supplied circular emblem (gold buildings + roofline
on a dark coin, with the company name). The header, footer, and any other brand
lockup read from `/assets/brand/logo.jpg` automatically.

Because the artwork is a detailed emblem on a dark background, the site masks it
into a **circular badge** (`rounded-full` + `object-cover`) so the square JPG
corners disappear and it reads as a clean gold-ringed coin on both the light
header (`#F1F3EE`) and the dark footer (`#0F241D`). The "Soul Mate Properties"
wordmark is drawn beside it in the site's own font, because the emblem's own
baked-in text is too small to read at header size.

## How to replace it

Drop a new file in this folder with the **same name** (`logo.jpg`) — no code
changes needed.

- If you switch to a different format (e.g. a transparent `.png` or `.svg`),
  update the single `src` in
  `src/app/shared/brand-logo/brand-logo.component.ts`.
- A version with a **transparent background** (PNG/SVG) is ideal if you ever
  want the mark without the dark coin — tell the developer and the circular
  mask/ring can be removed in one place.

## What happens if the file is missing

If `logo.jpg` ever fails to load, the site automatically falls back to a clean
"SM" monogram, so nothing ever appears broken.
