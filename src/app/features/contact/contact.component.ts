import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { OfficeCardComponent } from '../../shared/office-card/office-card.component';
import {
  officeById,
  officePhone,
  OfficeInfo,
  OFFICES,
  PhoneLine,
  SITE,
  telLink,
  whatsappLink,
} from '../../core/site';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, OfficeCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);

  protected readonly site = SITE;
  protected readonly ceo = SITE.ceo;
  protected readonly offices: readonly OfficeInfo[] = OFFICES;

  /** WhatsApp chat link for one of the CEO's lines. */
  protected ceoWaHref(line: PhoneLine): string {
    return whatsappLink(line.whatsapp, `Hello ${this.ceo.name}, I'd like to make an enquiry.`);
  }

  /** Click-to-call link for one of the CEO's lines. */
  protected ceoTelHref(line: PhoneLine): string {
    return telLink(line.dial);
  }

  /** True once the user has attempted to submit — gates validation messages. */
  protected readonly submitted = signal(false);

  protected readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    phone: [''],
    office: ['kano' as OfficeInfo['id'], Validators.required],
    message: ['', [Validators.required, Validators.minLength(5)]],
  });

  /** Compose the enquiry and hand off to WhatsApp for the selected office. */
  protected send(): void {
    this.submitted.set(true);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { name, phone, office, message } = this.form.getRawValue();
    const target = officeById(office);
    const text =
      `Hello ${SITE.name} (${target.label}),\n\n` +
      `My name is ${name}.\n` +
      `Phone: ${phone.trim() || 'not provided'}\n\n` +
      `${message}`;

    window.open(whatsappLink(officePhone(target).whatsapp, text), '_blank', 'noopener');
  }
}
