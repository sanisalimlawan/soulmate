import { Routes } from '@angular/router';
import { LandingComponent } from './features/landing/landing.component';
import { ComingSoonData } from './features/coming-soon/coming-soon.component';

const SUFFIX = 'Soul Mate Properties';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    title: `${SUFFIX} — Homes, land & commercial property in Kano & Abuja`,
  },
  {
    path: 'about',
    title: `About · ${SUFFIX}`,
    loadComponent: () => import('./features/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'contact',
    title: `Contact · ${SUFFIX}`,
    loadComponent: () =>
      import('./features/contact/contact.component').then((m) => m.ContactComponent),
  },
  {
    path: 'book-inspection',
    title: `Book an Inspection · ${SUFFIX}`,
    loadComponent: () =>
      import('./features/book-inspection/book-inspection.component').then(
        (m) => m.BookInspectionComponent,
      ),
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
        bullets: ['Homes, land & commercial', 'Locally inspected', 'Wuse Zone 2 office'],
      } satisfies ComingSoonData,
    },
  },
  {
    path: '**',
    title: `Page not found · ${SUFFIX}`,
    loadComponent: () =>
      import('./features/not-found/not-found.component').then((m) => m.NotFoundComponent),
  },
];
