/**
 * Single source of truth for site-wide content that is reused across pages:
 * company details, office locations, navigation, and the click-to-chat /
 * click-to-call / directions link builders.
 *
 * This is plain typed data + pure helpers (no Angular DI) so any component can
 * import it directly. When the phase moves to real/dynamic data, this file is
 * the one place to swap.
 *
 * ── ACTION REQUIRED before going live ──────────────────────────────────────
 * The WhatsApp numbers and e-mail below are PLACEHOLDERS. Replace the digits in
 * `OFFICES[].whatsapp` / `.phoneDisplay` / `.phoneDial` and `SITE.email` with
 * the client's real details. WhatsApp numbers must be in full international
 * format with no "+", spaces or leading zero (e.g. Nigeria: 2348012345678).
 * ---------------------------------------------------------------------------
 */

/** A navigable link backed by an Angular route path. */
export interface RouteLink {
  readonly label: string;
  /** Absolute route path, e.g. `/about`. */
  readonly path: string;
}

/** A physical office and its contact channels. */
export interface OfficeInfo {
  readonly id: 'kano' | 'abuja';
  /** City name, e.g. `Kano`. */
  readonly city: string;
  /** Card heading, e.g. `Kano office`. */
  readonly label: string;
  /** Short district/area line. */
  readonly area: string;
  /** Full street address on one line. */
  readonly address: string;
  /** Human-readable phone number for display. */
  readonly phoneDisplay: string;
  /** Phone number for `tel:` links (international, no spaces). */
  readonly phoneDial: string;
  /** WhatsApp number for `wa.me` links (international digits, no "+"). */
  readonly whatsapp: string;
  /** Search string used for the Google Maps directions link. */
  readonly mapsQuery: string;
}

/** Company-level details. */
export const SITE = {
  name: 'Soul Mate Properties',
  shortName: 'Soul Mate',
  tagline: 'Homes, land & commercial property across Kano & Abuja',
  /** PLACEHOLDER — replace with the client's real inbox. */
  email: 'hello@soulmateproperties.ng',
} as const;

/**
 * Office directory. The Abuja address was provided by the client
 * ("Wuse Zone 2, opposite GSM Village"). WhatsApp/phone numbers are
 * placeholders — see the ACTION REQUIRED note at the top of this file.
 */
export const OFFICES: readonly OfficeInfo[] = [
  {
    id: 'kano',
    city: 'Kano',
    label: 'Kano office',
    area: 'Nassarawa GRA',
    address: 'Nassarawa GRA, Kano', // PLACEHOLDER street line — confirm with client.
    phoneDisplay: '+234 800 000 0001',
    phoneDial: '+2348000000001',
    whatsapp: '2348000000001',
    mapsQuery: 'Soul Mate Properties, Nassarawa GRA, Kano, Nigeria',
  },
  {
    id: 'abuja',
    city: 'Abuja',
    label: 'Abuja office',
    area: 'Wuse Zone 2',
    address: 'Wuse Zone 2, opposite GSM Village, Abuja',
    phoneDisplay: '+234 800 000 0002',
    phoneDial: '+2348000000002',
    whatsapp: '2348000000002',
    mapsQuery: 'Wuse Zone 2, opposite GSM Village, Abuja, Nigeria',
  },
];

/** Look an office up by id; throws if the id is unknown (developer error). */
export function officeById(id: OfficeInfo['id']): OfficeInfo {
  const match = OFFICES.find((office) => office.id === id);
  if (!match) {
    throw new Error(`Unknown office id: ${id}`);
  }
  return match;
}

/** Primary navigation shown in the header. */
export const PRIMARY_NAV: readonly RouteLink[] = [
  { label: 'Buy', path: '/buy' },
  { label: 'Rent', path: '/rent' },
  { label: 'Sell / List', path: '/sell' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

/** "Explore" column shown in the footer — every route is reachable from here. */
export const EXPLORE_LINKS: readonly RouteLink[] = [
  { label: 'Buy a property', path: '/buy' },
  { label: 'Rent a property', path: '/rent' },
  { label: 'List with us', path: '/sell' },
  { label: 'Book an inspection', path: '/book-inspection' },
  { label: 'About us', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

/**
 * Build a WhatsApp click-to-chat URL.
 * @param whatsapp International number, digits only, no "+".
 * @param message Plain-text message to pre-fill in the chat.
 */
export function whatsappLink(whatsapp: string, message: string): string {
  return `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Build a `tel:` URL from a dial string. */
export function telLink(phoneDial: string): string {
  return `tel:${phoneDial}`;
}

/** Build a Google Maps search/directions URL from a free-text query. */
export function mapsLink(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
