import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { OfficeInfo, OFFICES, SITE, whatsappLink } from '../../core/site';

/**
 * Floating "chat on WhatsApp" button. Because the business runs two lines, a
 * tap expands a small chooser so the visitor reaches the right office. Each
 * option opens a pre-filled wa.me chat (client-side, no backend).
 */
@Component({
  selector: 'app-whatsapp-fab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './whatsapp-fab.component.html',
})
export class WhatsappFabComponent {
  protected readonly offices: readonly OfficeInfo[] = OFFICES;

  /** Whether the office chooser is expanded. */
  protected readonly open = signal(false);

  protected toggle(): void {
    this.open.update((value) => !value);
  }

  protected close(): void {
    this.open.set(false);
  }

  protected waHref(office: OfficeInfo): string {
    return whatsappLink(
      office.whatsapp,
      `Hello ${SITE.name} (${office.label}), I found you online and I'd like to make an enquiry.`,
    );
  }
}
