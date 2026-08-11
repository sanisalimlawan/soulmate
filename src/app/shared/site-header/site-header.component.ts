import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BrandLogoComponent } from '../brand-logo/brand-logo.component';
import { PRIMARY_NAV, RouteLink } from '../../core/site';

/** Sticky site header: brand, primary navigation, and the primary CTA. */
@Component({
  selector: 'app-site-header',
  imports: [RouterLink, RouterLinkActive, BrandLogoComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './site-header.component.html',
})
export class SiteHeaderComponent {
  protected readonly navLinks: readonly RouteLink[] = PRIMARY_NAV;

  /** Whether the mobile navigation menu is expanded. */
  protected readonly menuOpen = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
