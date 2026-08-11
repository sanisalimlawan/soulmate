import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

/** Content for a branded "coming soon" page, supplied via route `data`. */
export interface ComingSoonData {
  readonly eyebrow: string;
  readonly title: string;
  readonly lead: string;
  readonly bullets: readonly string[];
}

/**
 * A polished placeholder for routes whose full experience is still being built
 * (Buy, Rent, Sell, Kano, Abuja). Content is driven by the route's
 * `data.comingSoon`, so a single component serves every such page.
 */
@Component({
  selector: 'app-coming-soon',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './coming-soon.component.html',
})
export class ComingSoonComponent {
  private readonly route = inject(ActivatedRoute);

  private readonly data = toSignal(
    this.route.data as Observable<{ comingSoon: ComingSoonData }>,
    { requireSync: true },
  );

  protected content(): ComingSoonData {
    return this.data().comingSoon;
  }
}
