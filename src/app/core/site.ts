/**
 * Single source of truth for site-wide content that is reused across pages:
 * company details, office locations, the people you can reach, navigation, and
 * the click-to-chat / click-to-call / directions link builders.
 *
 * This is plain typed data + pure helpers (no Angular DI) so any component can
 * import it directly. When the phase moves to real/dynamic data, this file is
 * the one place to swap.
 *
 * Contact numbers below are the client's REAL WhatsApp-enabled lines. The only
 * thing still outstanding before launch is `SITE.email` (see the note there) —
 * no e-mail address was supplied, so the site currently leads with phone /
 * WhatsApp and hides the e-mail row until one is added.
 */

/** A navigable link backed by an Angular route path. */
export interface RouteLink {
  readonly label: string;
  /** Absolute route path, e.g. `/about`. */
  readonly path: string;
}

/**
 * A single phone line. Every line in this file is WhatsApp-enabled, so the same
 * number powers both the `tel:` call action and the `wa.me` chat action.
 */
export interface PhoneLine {
  /** Human-readable, local format, e.g. `0803 198 5556`. */
  readonly display: string;
  /** For `tel:` links — international, no spaces, e.g. `+2348031985556`. */
  readonly dial: string;
  /** For `wa.me` links — international digits, no `+`, e.g. `2348031985556`. */
  readonly whatsapp: string;
}

/** A named person the business can be reached through. */
export interface Contact {
  /** Full name, e.g. `Alh. Aliyu Yusha'u Hamisu`. */
  readonly name: string;
  /** Role / title, e.g. `Managing Director — Kano branch`. */
  readonly title: string;
  /** One or more phone lines; the first is the primary line for one-tap actions. */
  readonly phones: readonly PhoneLine[];
}

/** A physical office, the manager who runs it, and its contact channels. */
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
  /** Office email address. */
  readonly email: string;
  /** The branch manager, with their WhatsApp-enabled phone line(s). */
  readonly manager: Contact;
  /** Search string used for the Google Maps directions link. */
  readonly mapsQuery: string;
}

/**
 * Build a WhatsApp-enabled phone line from a Nigerian local number
 * (e.g. `"08031985556"`), producing its display, `tel:` and `wa.me` forms.
 * Pure string work — keeps the numbers below readable and avoids transcription
 * slips between the three formats.
 */
function ngPhone(local: string): PhoneLine {
  const digits = local.replace(/\D/g, ''); // e.g. "08031985556"
  const intl = `234${digits.replace(/^0/, '')}`; // e.g. "2348031985556"
  const display = `${digits.slice(0, 4)} ${digits.slice(4, 7)} ${digits.slice(7)}`;
  return { display, dial: `+${intl}`, whatsapp: intl };
}

/** Company leadership — the CEO oversees the company across both branches. */
const CEO: Contact = {
  name: "Alh. Aliyu Yusha'u Hamisu",
  title: 'Chief Executive Officer',
  phones: [ngPhone('08031985556'), ngPhone('08148700084')],
};

/** Company-level details. */
export const SITE = {
  name: 'Soul Mate Properties',
  shortName: 'Soul Mate',
  tagline: 'Homes, land & commercial property across Kano & Abuja',
  /**
   * Mock e-mail address for development. Replace with real address before launch.
   */
  email: 'info@soulmateproperties.ng' as string | null,
  /** The CEO, reachable directly on WhatsApp / phone. */
  ceo: CEO,
} as const;

/**
 * Office directory. The Abuja address was provided by the client
 * ("Wuse Zone 3, opposite GSM Village"); the Kano street line is still a
 * placeholder to confirm. Every number is a real WhatsApp-enabled line.
 */
export const OFFICES: readonly OfficeInfo[] = [
  {
    id: 'kano',
    city: 'Kano',
    label: 'Kano office',
    area: 'Nassarawa GRA',
    address: 'Nassarawa GRA, Kano', // PLACEHOLDER street line — confirm with client.
    email: 'kano@soulmateproperties.ng',
    manager: {
      name: "Anwar Ahmad Na'abba",
      title: 'Managing Director — Kano branch',
      phones: [ngPhone('08161712990'), ngPhone('08086668333')],
    },
    mapsQuery: 'Soul Mate Properties, Nassarawa GRA, Kano, Nigeria',
  },
  {
    id: 'abuja',
    city: 'Abuja',
    label: 'Abuja office',
    area: 'Wuse Zone 3',
    address: 'Wuse Zone 3, opposite GSM Village, Abuja',
    email: 'abuja@soulmateproperties.ng',
    manager: {
      name: 'Alh. Ahmad Ibrahim',
      title: 'Managing Director — Abuja branch',
      phones: [ngPhone('08034548332'), ngPhone('08026601720')],
    },
    mapsQuery: 'Wuse Zone 3, opposite GSM Village, Abuja, Nigeria',
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

/** The primary (first) phone line for an office — used for one-tap actions. */
export function officePhone(office: OfficeInfo): PhoneLine {
  return office.manager.phones[0];
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
