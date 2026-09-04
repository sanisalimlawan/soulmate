import { Routes } from '@angular/router';
import { LandingComponent } from './features/landing/landing.component';
import { ComingSoonData } from './features/coming-soon/coming-soon.component';

const SUFFIX = 'Soul Mate Properties';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    title: `${SUFFIX} — Homes, land & commercial property in Kano & Abuja`,
    data: {
      seo: {
        title: `${SUFFIX} — Homes, land & commercial property in Kano & Abuja`,
        description: 'Discover verified homes, land and commercial property for sale and rent across Kano and Abuja, Nigeria. Soul Mate Properties matches you with the perfect property.',
        keywords: 'Soul Mate Properties, real estate, Kano, Abuja, Nigeria, houses for sale, apartments for rent, land for sale, commercial property',
        ogTitle: `${SUFFIX} — Homes, land & commercial property in Kano & Abuja`,
        ogDescription: 'Discover verified homes, land and commercial property for sale and rent across Kano and Abuja, Nigeria.',
        ogImage: 'https://soulmateproperties.ng/assets/og-image.jpg',
      },
    },
  },
  {
    path: 'about',
    title: `About · ${SUFFIX}`,
    loadComponent: () => import('./features/about/about.component').then((m) => m.AboutComponent),
    data: {
      seo: {
        title: `About · ${SUFFIX}`,
        description: 'Learn about Soul Mate Properties, a leading real estate agency operating in Kano and Abuja, Nigeria. Our mission, team, and commitment to verified listings.',
        keywords: 'Soul Mate Properties, about us, real estate agency, Kano, Abuja, Nigeria',
        ogTitle: `About · ${SUFFIX}`,
        ogDescription: 'Learn about Soul Mate Properties, a leading real estate agency operating in Kano and Abuja, Nigeria.',
        ogImage: 'https://soulmateproperties.ng/assets/og-image.jpg',
      },
    },
  },
  {
    path: 'contact',
    title: `Contact · ${SUFFIX}`,
    loadComponent: () =>
      import('./features/contact/contact.component').then((m) => m.ContactComponent),
    data: {
      seo: {
        title: `Contact · ${SUFFIX}`,
        description: 'Get in touch with Soul Mate Properties via phone, WhatsApp, or email. Find our office locations in Kano and Abuja and send us a message.',
        keywords: 'Soul Mate Properties contact, phone number, WhatsApp, email, Kano office, Abuja office',
        ogTitle: `Contact · ${SUFFIX}`,
        ogDescription: 'Get in touch with Soul Mate Properties via phone, WhatsApp, or email.',
        ogImage: 'https://soulmateproperties.ng/assets/og-image.jpg',
      },
    },
  },
  {
    path: 'book-inspection',
    title: `Book an Inspection · ${SUFFIX}`,
    loadComponent: () =>
      import('./features/book-inspection/book-inspection.component').then(
        (m) => m.BookInspectionComponent,
      ),
    data: {
      seo: {
        title: `Book an Inspection · ${SUFFIX}`,
        description: 'Schedule a property viewing with Soul Mate Properties. Choose date, time, and office, and we’ll prepare your booking details on WhatsApp.',
        keywords: 'book inspection, property viewing, schedule appointment, Soul Mate Properties, Kano, Abuja',
        ogTitle: `Book an Inspection · ${SUFFIX}`,
        ogDescription: 'Schedule a property viewing with Soul Mate Properties.',
        ogImage: 'https://soulmateproperties.ng/assets/og-image.jpg',
      },
    },
  },
  {
    path: 'buy',
    title: `Buy a property · ${SUFFIX}`,
    loadComponent: () =>
      import('./features/coming-soon/coming-soon.component').then((m) => m.ComingSoonComponent),
    data: {
      comingSoon: {
        eyebrow: 'Buying',
        title: 'Buy a property',
        lead: "Browse and buy verified homes, land and commercial property across Kano and Abuja. Our full searchable listings are on the way — in the meantime, tell us what you're after and we'll match you personally.",
        bullets: ['Verified, inspected listings', 'Homes, land & commercial', 'Kano & Abuja'],
      } satisfies ComingSoonData,
      seo: {
        title: `Buy a property · ${SUFFIX}`,
        description: 'Explore properties for sale across Kano and Abuja. Soul Mate Properties offers verified listings of homes, land, and commercial real estate.',
        keywords: 'buy property, houses for sale, land for sale, commercial property, Kano, Abuja, Nigeria',
        ogTitle: `Buy a property · ${SUFFIX}`,
        ogDescription: 'Explore properties for sale across Kano and Abuja.',
        ogImage: 'https://soulmateproperties.ng/assets/og-image.jpg',
      },
    },
  },
  {
    path: 'rent',
    title: `Rent a property · ${SUFFIX}`,
    loadComponent: () =>
      import('./features/coming-soon/coming-soon.component').then((m) => m.ComingSoonComponent),
    data: {
      comingSoon: {
        eyebrow: 'Renting',
        title: 'Rent a property',
        lead: "Serviced flats, family homes and commercial space to let. The rental search is coming soon — send us your requirements and we'll line up options for you right away.",
        bullets: ['Serviced & unserviced', 'Short and long lets', 'Kano & Abuja'],
      } satisfies ComingSoonData,
      seo: {
        title: `Rent a property · ${SUFFIX}`,
        description: 'Find rental properties across Kano and Abuja. Soul Mate Properties lists serviced flats, family homes, and commercial spaces for rent.',
        keywords: 'rent property, apartments for rent, serviced flats, commercial space, Kano, Abuja, Nigeria',
        ogTitle: `Rent a property · ${SUFFIX}`,
        ogDescription: 'Find rental properties across Kano and Abuja.',
        ogImage: 'https://soulmateproperties.ng/assets/og-image.jpg',
      },
    },
  },
  {
    path: 'sell',
    title: `Sell or list · ${SUFFIX}`,
    loadComponent: () =>
      import('./features/coming-soon/coming-soon.component').then((m) => m.ComingSoonComponent),
    data: {
      comingSoon: {
        eyebrow: 'Selling & listing',
        title: 'Sell or list with us',
        lead: 'List your property with Soul Mate Properties and reach serious, verified buyers and tenants across Kano and Abuja. Our online listing tools are coming soon — talk to us now to get started.',
        bullets: ['Verified buyers & tenants', 'Fair, transparent pricing', 'Guided to close'],
      } satisfies ComingSoonData,
      seo: {
        title: `Sell or list · ${SUFFIX}`,
        description: 'List your property for sale or rent with Soul Mate Properties. Reach verified buyers and tenants across Kano and Abuja.',
        keywords: 'sell property, list property, real estate listing, Kano, Abuja, Nigeria',
        ogTitle: `Sell or list · ${SUFFIX}`,
        ogDescription: 'List your property for sale or rent with Soul Mate Properties.',
        ogImage: 'https://soulmateproperties.ng/assets/og-image.jpg',
      },
    },
  },
  {
    path: 'kano',
    title: `Kano listings · ${SUFFIX}`,
    loadComponent: () =>
      import('./features/coming-soon/coming-soon.component').then((m) => m.ComingSoonComponent),
    data: {
      comingSoon: {
        eyebrow: 'Kano',
        title: 'Kano listings',
        lead: 'A dedicated view of everything we have across Kano — homes, land and commercial property. This page is being built; our Kano office is ready to help you right now.',
        bullets: ['Homes, land & commercial', 'Locally inspected', 'Nassarawa GRA office'],
      } satisfies ComingSoonData,
      seo: {
        title: `Kano listings · ${SUFFIX}`,
        description: 'Browse all available properties in Kano, including homes, land, and commercial real estate. Verified listings from our local office.',
        keywords: 'Kano property listings, homes for sale Kano, land for sale Kano, commercial property Kano',
        ogTitle: `Kano listings · ${SUFFIX}`,
        ogDescription: 'Browse all available properties in Kano.',
        ogImage: 'https://soulmateproperties.ng/assets/og-image.jpg',
      },
    },
  },
  {
    path: 'abuja',
    title: `Abuja listings · ${SUFFIX}`,
    loadComponent: () =>
      import('./features/coming-soon/coming-soon.component').then((m) => m.ComingSoonComponent),
    data: {
      comingSoon: {
        eyebrow: 'Abuja',
        title: 'Abuja listings',
        lead: 'A dedicated view of everything we have across Abuja, from Wuse to Guzape. This page is being built; our Abuja office is ready to help you right now.',
        bullets: ['Homes, land & commercial', 'Locally inspected', 'Wuse Zone 3 office'],
      } satisfies ComingSoonData,
      seo: {
        title: `Abuja listings · ${SUFFIX}`,
        description: 'Explore all available properties in Abuja, from Wuse to Guzape. Verified listings from our local office.',
        keywords: 'Abuja property listings, homes for sale Abuja, land for sale Abuja, commercial property Abuja',
        ogTitle: `Abuja listings · ${SUFFIX}`,
        ogDescription: 'Explore all available properties in Abuja.',
        ogImage: 'https://soulmateproperties.ng/assets/og-image.jpg',
      },
    },
  },
  {
    path: '**',
    title: `Page not found · ${SUFFIX}`,
    loadComponent: () =>
      import('./features/not-found/not-found.component').then((m) => m.NotFoundComponent),
    data: {
      seo: {
        title: `Page not found · ${SUFFIX}`,
        description: 'The page you are looking for does not exist. Return to the homepage or contact us for assistance.',
        keywords: '404, page not found, error, Soul Mate Properties',
        ogTitle: `Page not found · ${SUFFIX}`,
        ogDescription: 'The page you are looking for does not exist.',
        ogImage: 'https://soulmateproperties.ng/assets/og-image.jpg',
      },
    },
  },
];
