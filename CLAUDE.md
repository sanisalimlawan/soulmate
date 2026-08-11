# Soul Mate Properties — soulmate-web

Public marketing/landing site for Soul Mate Properties, a real estate agency operating in Kano and Abuja, Nigeria (sale, purchase, and rental of residential, commercial, and land property). This is **client work — Innovator Hub is being paid to deliver this**, so treat it as production-grade, not a prototype throwaway. Clean, well-structured, maintainable code is expected, not just something that visually works.

## Stack
- Angular 19, standalone components, signals (no NgModules).
- Tailwind CSS v3 for all styling — already installed and configured in `tailwind.config.js`.
- SCSS is only used for `src/styles/tokens.scss` (design tokens as CSS custom properties) and global resets in `src/styles.scss`. Component-level `.scss` files should stay empty — style with Tailwind utility classes in the template.
- No PrimeNG, no Angular Material, no external UI kit for this site. Hand-built with Tailwind.

## Design tokens
Source of truth: `src/styles/tokens.scss`, mapped into Tailwind's theme in `tailwind.config.js`. Always use the Tailwind names below — never hardcode hex values:

| Tailwind class | Token | Use |
|---|---|---|
| `bg-forest` / `text-forest` | `--smp-forest` (#16332B) | Primary brand color — nav, buttons, banners |
| `bg-forest-ink` / `text-forest-ink` | `--smp-forest-ink` (#0F241D) | Headline text |
| `bg-brass` / `text-brass` | `--smp-brass` (#B98B3E) | Accent — CTAs, highlighted words |
| `text-brass-light` | `--smp-brass-light` (#D9AE63) | Lighter accent, on dark backgrounds |
| `bg-clay` / `text-clay` | `--smp-clay` (#A85C32) | Secondary accent — used sparingly (Kano skyline, eyebrow labels) |
| `bg-paper` | `--smp-paper` (#F1F3EE) | Page background |
| `bg-paper-2` | `--smp-paper-2` (#E8EBE2) | Secondary section background |
| `text-ink` | `--smp-ink` (#14201B) | Body text |
| `text-ink-soft` | `--smp-ink-soft` (#4A564E) | Muted/secondary text |
| `border-line` | `--smp-line` (#D8DCD1) | Hairline borders/dividers |

Fonts: `font-display` = Lora (serif, headings only), `font-body` = Poppins (default body, applied globally — you rarely need to set it explicitly).

**Known gotcha:** opacity modifiers on these token colors (e.g. `bg-forest/50`) do not work — they're raw `var(--smp-forest)` references, not Tailwind's RGB-tuple format. For transparency, use `bg-[color-mix(in_srgb,var(--smp-forest)_50%,transparent)]` or a separate `opacity-*` utility on the element instead.

## Conventions
- Standalone components only, one feature folder per page under `src/app/features/`.
- No inline styles in templates — Tailwind utilities in the class attribute.
- No `any` types. Strict typing throughout.
- No lorem ipsum or placeholder copy — use the real approved copy given in each task prompt, exactly as written.
- Every section must be responsive (mobile-first, `md:`/`lg:` breakpoints), not just checked at desktop width.
- Run `ng build` before considering a task done — it must compile clean, no errors, no new warnings.

## Current status
`LandingComponent` is scaffolded at `src/app/features/landing/` and wired as the `''` route, but not yet implemented. It is **static only for this phase** — hardcoded content, no services, no HTTP calls, no backend. Dynamic data (real listings, CMS-driven content, forms that submit somewhere) comes in a later phase — do not add API calls or services unless a task explicitly asks for them.
