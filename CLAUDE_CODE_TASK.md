# Task prompt for Claude Code — build the Soul Mate Properties landing page

Run this inside the `soulmate-web` project (Claude Code will automatically read `CLAUDE.md` in the project root for stack conventions, design tokens, and constraints — read it before starting if you haven't already).

---

Implement the `LandingComponent` at `src/app/features/landing/landing.component.ts`. This is client-paid production work — build it to a standard you'd be comfortable shipping and billing for, not a rough draft. That means: clean semantic HTML, properly typed component code, no leftover placeholder/lorem-ipsum content, consistent spacing rhythm across sections, and genuinely responsive behavior tested at mobile, tablet, and desktop widths — not just "looks fine at 1440px."

It is a **static page — no API calls, no services, no dynamic data**. All content (listings, copy, prices) is hardcoded in the template or as a local readonly array in the component class.

## Sections, in order

1. **Nav bar** — circular "SM" monogram logo on forest green + wordmark "Soul Mate Properties" (with "Properties" in brass italic), nav links (Buy, Rent, Sell / List, Kano, Abuja — `href="#"` placeholders, no routing yet), solid forest-green "Book an Inspection" button on the right. Collapse to a simple mobile layout (logo + button, links can drop or go behind a simple menu button — your call, keep it clean).

2. **Hero**
   - Small uppercase eyebrow label with thin horizontal rules flanking it: "SOUL MATE PROPERTIES · KANO & ABUJA" in clay.
   - Large serif (`font-display`) headline, centered: "Every property has someone **it's meant for.**" — last phrase in italic brass.
   - Centered subhead, muted (`text-ink-soft`): "Search verified homes, land and commercial spaces for sale and rent across Kano and Abuja — and let us match you to the right one."
   - **Search module**: white card, rounded corners, soft shadow, floating below the subhead. Two tabs at top ("For Sale" active, "For Rent" inactive — use a signal for active tab state, purely visual toggle for now). Below: a row of 4 fields (City / Property Type / Budget / Bedrooms — label + static placeholder value each, no real dropdown logic yet) ending in a brass "Find your match" button. Stack fields vertically on mobile.

3. **Skyline signature graphic** — full-width inline SVG directly under the search module, split down the middle: left half is a flat-color Kano skyline (city gate arch, domed rooftops, crenellated wall — clay), right half is Abuja's skyline (towers of varying height + rounded Aso Rock silhouette — forest green). Small italic "Kano" / "Abuja" labels near the bottom corners. Geometric shapes only (rect/circle/path), no external image assets. This is the signature visual of the page — give it real care, it shouldn't look like a generic banner.

4. **Trust strip** — full-width forest-green bar, 4 items in a row (dot + text, wraps on mobile): "Two full-service offices — Kano & Abuja", "Sale, purchase & rental — every property type", "Verified listings, inspected before publishing", "Secure online payments".

5. **Featured listings**
   - Header row: brass "FEATURED" eyebrow, serif title "Listings across both cities", right-aligned note (`text-ink-soft`, small): "Sample listings shown for demonstration — live inventory will populate this section once real properties are added."
   - Grid of 4 static cards (2 cols tablet, 1 col mobile, 4 cols desktop). Each: a gradient block standing in for a photo (vary the gradient per card using the token colors) with a "SAMPLE" pill top-left and a "For Sale"/"For Rent" pill top-right, then price (serif, bold), one-line title + location, and a meta row (beds/baths/size or relevant tags) above a top border.
   - Hardcode as a `readonly` typed array in the component class:
     1. ₦85,000,000 — 4-Bed Duplex · Nassarawa GRA, Kano — For Sale — 4 bed, 5 bath, 450 sqm
     2. ₦4,500,000/yr — 3-Bed Terrace · Jabi, Abuja — For Rent — 3 bed, 3 bath, Serviced
     3. ₦60,000,000 — Commercial Complex · Sabon Gari, Kano — For Sale — Shop units, Corner plot
     4. ₦32,000,000 — Serviced Land, 600 sqm · Guzape, Abuja — For Sale — Titled, Fenced

6. **How it works** — `bg-paper-2` section, 3 columns: "Search & discover / Browse verified listings" / body, "Book & pay securely / Schedule your inspection" / body, "Close the deal / Sign, move in, settle" / body — each with an italic brass eyebrow line, serif subtitle, short muted body paragraph. Write concise, professional body copy consistent with the rest of the page's tone.

7. **CTA banner** — rounded forest-green block: headline "Have a property to sell or *rent out?*" (last two words italic brass) on the left, brass "List with Soul Mate Properties" button on the right. Stack vertically on mobile.

8. **Footer** — 4 columns: company name + one-line description; Kano office (area name, address line, phone); Abuja office (same); quick links (Buy a property, Rent a property, List with us, Contact an agent). Below, a hairline-top-border row: "© Soul Mate Properties" left, "Prototype interface — for proposal purposes only" right.

## Before you consider this done
- `ng build` compiles with no errors and no new warnings.
- Every section is responsive — check mobile (375px), tablet (768px), and desktop (1440px).
- No hardcoded hex colors anywhere — only the Tailwind token classes from `CLAUDE.md`.
- No unused imports, no leftover scaffold boilerplate, no console errors.
