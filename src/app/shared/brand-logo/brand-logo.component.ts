import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
} from '@angular/core';

/**
 * Brand lockup: the logo mark (from `/assets/brand/logo.svg`) plus the
 * "Soul Mate Properties" wordmark. If the logo file is missing or fails to
 * load, it falls back to an "SM" monogram so the brand never appears broken.
 *
 * Presentational only — callers wrap it in their own `routerLink` when it needs
 * to be clickable (see the header/footer).
 */
@Component({
  selector: 'app-brand-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span class="flex items-center gap-3">
      @if (imgFailed()) {
        <span
          class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display text-sm font-semibold tracking-wide"
          [class]="variant() === 'onDark' ? 'bg-brass text-forest-ink' : 'bg-forest text-paper'"
          aria-hidden="true"
          >SM</span
        >
      } @else {
        <img
          src="assets/brand/logo.svg"
          alt=""
          aria-hidden="true"
          width="40"
          height="40"
          class="h-10 w-10 shrink-0 object-contain"
          (error)="imgFailed.set(true)"
        />
      }

      @if (showWordmark()) {
        <span
          class="font-display text-lg font-semibold leading-none"
          [class]="variant() === 'onDark' ? 'text-paper' : 'text-forest-ink'"
        >
          Soul&nbsp;Mate
          <span [class]="variant() === 'onDark' ? 'italic text-brass-light' : 'italic text-brass'"
            >Properties</span
          >
        </span>
      }
    </span>
  `,
})
export class BrandLogoComponent {
  /** Which background the logo sits on — controls text/fallback colours. */
  readonly variant = input<'onLight' | 'onDark'>('onLight');
  /** Whether to show the "Soul Mate Properties" wordmark beside the mark. */
  readonly showWordmark = input(true, { transform: booleanAttribute });

  /** Set when the logo image fails to load, triggering the monogram fallback. */
  protected readonly imgFailed = signal(false);
}
