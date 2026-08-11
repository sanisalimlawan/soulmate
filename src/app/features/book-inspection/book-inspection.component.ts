import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { officeById, officePhone, OfficeInfo, OFFICES, SITE, whatsappLink } from '../../core/site';

@Component({
  selector: 'app-book-inspection',
  imports: [ReactiveFormsModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './book-inspection.component.html',
})
export class BookInspectionComponent {
  private readonly fb = inject(FormBuilder);

  protected readonly offices: readonly OfficeInfo[] = OFFICES;

  protected readonly purposes: readonly string[] = ['Buy', 'Rent', 'Sell / List', 'General enquiry'];
  protected readonly propertyTypes: readonly string[] = [
    'House',
    'Apartment / Flat',
    'Land',
    'Commercial',
    'Not sure yet',
  ];
  protected readonly timeSlots: readonly string[] = [
    'Morning (9am – 12pm)',
    'Afternoon (12pm – 4pm)',
    'Evening (4pm – 7pm)',
  ];

  /** True once the user has attempted to submit — gates validation messages. */
  protected readonly submitted = signal(false);
  /** The composed WhatsApp URL, kept so we can offer a manual fallback link. */
  protected readonly lastLink = signal<string | null>(null);

  protected readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    phone: ['', [Validators.required, Validators.minLength(7)]],
    office: ['kano' as OfficeInfo['id'], Validators.required],
    purpose: ['Buy', Validators.required],
    propertyType: ['Not sure yet'],
    area: [''],
    date: [''],
    time: [''],
    notes: [''],
  });

  /** Compose the booking summary and hand off to WhatsApp for the chosen office. */
  protected book(): void {
    this.submitted.set(true);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const v = this.form.getRawValue();
    const target = officeById(v.office);

    const lines: string[] = [
      `Hello ${SITE.name} (${target.label}),`,
      '',
      `I'd like to book a property inspection.`,
      '',
      `Name: ${v.name}`,
      `Phone: ${v.phone}`,
      `Looking to: ${v.purpose}`,
    ];
    if (v.propertyType) lines.push(`Property type: ${v.propertyType}`);
    if (v.area.trim()) lines.push(`Area of interest: ${v.area.trim()}`);
    if (v.date) lines.push(`Preferred date: ${v.date}`);
    if (v.time) lines.push(`Preferred time: ${v.time}`);
    if (v.notes.trim()) lines.push('', `Notes: ${v.notes.trim()}`);

    const link = whatsappLink(officePhone(target).whatsapp, lines.join('\n'));
    this.lastLink.set(link);
    window.open(link, '_blank', 'noopener');
  }
}
