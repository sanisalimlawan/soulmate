import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OfficeCardComponent } from '../../shared/office-card/office-card.component';
import {
  Contact,
  OfficeInfo,
  OFFICES,
  PhoneLine,
  SITE,
  telLink,
  whatsappLink,
} from '../../core/site';

interface ValueCard {
  readonly title: string;
  readonly body: string;
}

interface Stat {
  readonly value: string;
  readonly label: string;
}

@Component({
  selector: 'app-about',
  imports: [RouterLink, OfficeCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.component.html',
})
export class AboutComponent {
  protected readonly offices: readonly OfficeInfo[] = OFFICES;

  /** The people behind the business — CEO first, then each branch's MD. */
  protected readonly leaders: readonly Contact[] = [SITE.ceo, ...OFFICES.map((o) => o.manager)];

  protected waHref(line: PhoneLine, name: string): string {
    return whatsappLink(line.whatsapp, `Hello ${name}, I'd like to make an enquiry about a property.`);
  }

  protected telHref(line: PhoneLine): string {
    return telLink(line.dial);
  }

  protected readonly stats: readonly Stat[] = [
    { value: '2', label: 'Cities served — Kano & Abuja' },
    { value: '4', label: 'Property types — homes, land, commercial, rentals' },
    { value: '100%', label: 'Listings inspected before they go live' },
  ];

  protected readonly values: readonly ValueCard[] = [
    {
      title: 'Verified before listed',
      body: 'Every property is visited and confirmed by our team before it appears on the site. What you see is what actually exists.',
    },
    {
      title: 'Honest guidance',
      body: 'Clear pricing and clear paperwork. We give you the same advice we would give our own family — even when it means saying "not this one".',
    },
    {
      title: 'Two cities, one standard',
      body: 'Whether you are dealing with our Kano or Abuja office, you get the same diligence, responsiveness and care.',
    },
    {
      title: 'With you to handover',
      body: 'From the first inspection through titling and keys, an agent stays on your side until the deal is properly closed.',
    },
  ];
}
