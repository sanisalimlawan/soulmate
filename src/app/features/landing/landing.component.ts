import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

/** A primary navigation entry. `href` is a placeholder until routing lands. */
interface NavLink {
  readonly label: string;
  readonly href: string;
}

/** A single control in the hero search module (static, non-interactive for now). */
interface SearchField {
  readonly label: string;
  readonly value: string;
}

/** A demonstration property card. */
interface Listing {
  readonly price: string;
  readonly title: string;
  readonly location: string;
  readonly status: 'For Sale' | 'For Rent';
  readonly meta: readonly string[];
  /** Tailwind gradient utility classes used as a photo stand-in. */
  readonly media: string;
}

/** A step in the "how it works" sequence. */
interface ProcessStep {
  readonly index: string;
  readonly eyebrow: string;
  readonly title: string;
  readonly body: string;
}

/** A physical office location. */
interface Office {
  readonly city: string;
  readonly area: string;
  readonly address: string;
  readonly phone: string;
}

type SearchTab = 'sale' | 'rent';

@Component({
  selector: 'app-landing',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  /** Which search tab is visually active. Purely a visual toggle for this phase. */
  protected readonly activeTab = signal<SearchTab>('sale');
  /** Whether the mobile navigation menu is expanded. */
  protected readonly menuOpen = signal(false);

  protected setTab(tab: SearchTab): void {
    this.activeTab.set(tab);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected readonly navLinks: readonly NavLink[] = [
    { label: 'Buy', href: '#' },
    { label: 'Rent', href: '#' },
    { label: 'Sell / List', href: '#' },
    { label: 'Kano', href: '#' },
    { label: 'Abuja', href: '#' },
  ];

  protected readonly searchFields: readonly SearchField[] = [
    { label: 'City', value: 'Kano' },
    { label: 'Property Type', value: 'Any type' },
    { label: 'Budget', value: 'Any budget' },
    { label: 'Bedrooms', value: 'Any' },
  ];

  protected readonly trustPoints: readonly string[] = [
    'Two full-service offices — Kano & Abuja',
    'Sale, purchase & rental — every property type',
    'Verified listings, inspected before publishing',
    'Secure online payments',
  ];

  protected readonly listings: readonly Listing[] = [
    {
      price: '₦85,000,000',
      title: '4-Bed Duplex',
      location: 'Nassarawa GRA, Kano',
      status: 'For Sale',
      meta: ['4 bed', '5 bath', '450 sqm'],
      media: 'bg-gradient-to-br from-forest to-forest-ink',
    },
    {
      price: '₦4,500,000/yr',
      title: '3-Bed Terrace',
      location: 'Jabi, Abuja',
      status: 'For Rent',
      meta: ['3 bed', '3 bath', 'Serviced'],
      media: 'bg-gradient-to-tr from-clay to-brass',
    },
    {
      price: '₦60,000,000',
      title: 'Commercial Complex',
      location: 'Sabon Gari, Kano',
      status: 'For Sale',
      meta: ['Shop units', 'Corner plot'],
      media: 'bg-gradient-to-br from-brass to-clay',
    },
    {
      price: '₦32,000,000',
      title: 'Serviced Land, 600 sqm',
      location: 'Guzape, Abuja',
      status: 'For Sale',
      meta: ['Titled', 'Fenced'],
      media: 'bg-gradient-to-tr from-forest to-brass',
    },
  ];

  protected readonly steps: readonly ProcessStep[] = [
    {
      index: '01',
      eyebrow: 'Search & discover',
      title: 'Browse verified listings',
      body: 'Filter homes, land and commercial spaces across Kano and Abuja. Every listing is inspected and confirmed before it goes live, so what you see is what you get.',
    },
    {
      index: '02',
      eyebrow: 'Book & pay securely',
      title: 'Schedule your inspection',
      body: 'Reserve a viewing at a time that suits you and settle deposits or fees through secure online payment — no cash hand-offs, no guesswork.',
    },
    {
      index: '03',
      eyebrow: 'Close the deal',
      title: 'Sign, move in, settle',
      body: 'Our agents guide you through paperwork, titling and handover, so you take the keys with clean documents and complete peace of mind.',
    },
  ];

  protected readonly offices: readonly Office[] = [
    {
      city: 'Kano office',
      area: 'Nassarawa GRA',
      address: '18 Ahmadu Bello Way, Nassarawa GRA, Kano',
      phone: '+234 803 000 0001',
    },
    {
      city: 'Abuja office',
      area: 'Jabi District',
      address: '7 Jabi Lake Crescent, Jabi, Abuja',
      phone: '+234 803 000 0002',
    },
  ];

  protected readonly quickLinks: readonly NavLink[] = [
    { label: 'Buy a property', href: '#' },
    { label: 'Rent a property', href: '#' },
    { label: 'List with us', href: '#' },
    { label: 'Contact an agent', href: '#' },
  ];
}
