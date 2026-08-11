# Brand assets

Drop the Soul Mate Properties logo in this folder.

## How to add the real logo

Replace the file **`logo.svg`** in this folder with the client's logo, keeping
the **same file name** (`logo.svg`). No code changes are needed — the header,
footer, and WhatsApp button all read from `/assets/brand/logo.svg`
automatically.

- **Preferred format:** `.svg` (crisp at every size). A high-resolution `.png`
  with a transparent background also works — just export it and rename it to
  `logo.svg`… actually, if you only have a PNG, name it `logo.png` and tell the
  developer to switch the one path in `src/app/shared/brand-logo/brand-logo.component.ts`.
- **Shape:** icon / monogram only (square-ish). The "Soul Mate Properties"
  wordmark is drawn next to it in the site's own font, so the file should be the
  **mark only**, not the mark + text.
- **Background:** transparent.
- **Contrast:** the same file is shown on a light header (`#F1F3EE`) and a dark
  footer (`#0F241D`). Use a mark that reads on both (the placeholder brass mark
  does). If the real logo only works on one, ask the developer to wire a second
  file for dark backgrounds.

## What happens if the file is missing

If `logo.svg` ever fails to load, the site automatically falls back to a clean
"SM" monogram, so nothing ever appears broken. The current `logo.svg` is a
placeholder mark — replace it with the real brand asset before launch.
