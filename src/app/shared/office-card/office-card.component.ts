import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { mapsLink, OfficeInfo, SITE, telLink, whatsappLink } from '../../core/site';

/** A single office presented as a card with call / WhatsApp / directions actions. */
@Component({
  selector: 'app-office-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './office-card.component.html',
})
export class OfficeCardComponent {
  /** The office to render. Required. */
  readonly office = input.required<OfficeInfo>();

  protected readonly waHref = computed(() =>
    whatsappLink(
      this.office().whatsapp,
      `Hello ${SITE.name} (${this.office().label}), I'd like to make an enquiry.`,
    ),
  );

  protected readonly telHref = computed(() => telLink(this.office().phoneDial));
  protected readonly mapsHref = computed(() => mapsLink(this.office().mapsQuery));
}
