import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteHeaderComponent } from './shared/site-header/site-header.component';
import { SiteFooterComponent } from './shared/site-footer/site-footer.component';
import { WhatsappFabComponent } from './shared/whatsapp-fab/whatsapp-fab.component';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

/** Application shell: header + routed page + footer + floating WhatsApp button. */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteHeaderComponent, SiteFooterComponent, WhatsappFabComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        })
      )
      .subscribe(route => {
        const data = route.snapshot.data['seo'];
        if (data) {
          this.titleService.setTitle(data.title);
          this.metaService.updateTag({ name: 'description', content: data.description });
          this.metaService.updateTag({ name: 'keywords', content: data.keywords });
          this.metaService.updateTag({ property: 'og:title', content: data.ogTitle });
          this.metaService.updateTag({ property: 'og:description', content: data.ogDescription });
          this.metaService.updateTag({ property: 'og:image', content: data.ogImage });
          // Twitter tags
          this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
          this.metaService.updateTag({ name: 'twitter:title', content: data.ogTitle ?? data.title });
          this.metaService.updateTag({ name: 'twitter:description', content: data.ogDescription ?? data.description });
        } else {
          // fallback defaults
          this.titleService.setTitle('Soul Mate Properties — Kano & Abuja');
          this.metaService.updateTag({ name: 'description', content: 'Soul Mate Properties — buy, rent and sell verified homes, land and commercial property across Kano and Abuja, Nigeria.' });
          this.metaService.updateTag({ name: 'keywords', content: 'Soul Mate Properties, real estate, Kano, Abuja, Nigeria, houses for sale, apartments for rent, land for sale, commercial property' });
          this.metaService.updateTag({ property: 'og:title', content: 'Soul Mate Properties — Kano & Abuja' });
          this.metaService.updateTag({ property: 'og:description', content: 'Verified homes, land and commercial property across Kano and Abuja, Nigeria.' });
          this.metaService.updateTag({ property: 'og:image', content: 'https://soulmateproperties.ng/assets/og-image.jpg' });
          this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
          this.metaService.updateTag({ name: 'twitter:title', content: 'Soul Mate Properties' });
          this.metaService.updateTag({ name: 'twitter:description', content: 'Verified homes, land and commercial property across Kano and Abuja, Nigeria.' });
        }
      });
  }
}
