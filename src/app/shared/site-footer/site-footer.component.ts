import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BrandLogoComponent } from '../brand-logo/brand-logo.component';
import {
  EXPLORE_LINKS,
  mapsLink,
  OfficeInfo,
  OFFICES,
  RouteLink,
  SITE,
  telLink,
  whatsappLink,
} from '../../core/site';

/** Site footer: brand, both offices with contact channels, and explore links. */
@Component({
  selector: 'app-site-footer',
  imports: [RouterLink, BrandLogoComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './site-footer.component.html',
})
export class SiteFooterComponent {
  protected readonly site = SITE;
  protected readonly offices: readonly OfficeInfo[] = OFFICES;
  protected readonly exploreLinks: readonly RouteLink[] = EXPLORE_LINKS;
  protected readonly year = 2026;

  protected cityPath(office: OfficeInfo): string {
    return `/${office.id}`;
  }

  protected waHref(office: OfficeInfo): string {
    return whatsappLink(
      office.whatsapp,
      `Hello ${SITE.name} (${office.label}), I'd like to make an enquiry.`,
    );
  }

  protected telHref(office: OfficeInfo): string {
    return telLink(office.phoneDial);
  }

  protected mapsHref(office: OfficeInfo): string {
    return mapsLink(office.mapsQuery);
  }
}
