import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { mapsLink, OfficeInfo, PhoneLine, SITE, telLink, whatsappLink } from '../../core/site';

/**
 * A single office presented as a card: branch, address, the manager who runs it,
 * and every WhatsApp-enabled line with call / chat actions, plus directions.
 */
@Component({
  selector: 'app-office-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './office-card.component.html',
})
export class OfficeCardComponent {
  /** The office to render. Required. */
  readonly office = input.required<OfficeInfo>();

  protected readonly mapsHref = computed(() => mapsLink(this.office().mapsQuery));

  protected waHref(line: PhoneLine): string {
    return whatsappLink(
      line.whatsapp,
      `Hello ${SITE.name} (${this.office().label}), I'd like to make an enquiry.`,
    );
  }

  protected telHref(line: PhoneLine): string {
    return telLink(line.dial);
  }
}
