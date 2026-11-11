import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NotificationService } from '../../core/services/notification.service';

@Component({
  selector: 'app-toasts',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="toasts" aria-live="polite">
      @for (n of notifications.items(); track n.id) {
        <div class="toast" [class.error]="n.type === 'error'" role="status">
          <span>{{ n.message }}</span>
          <button type="button" (click)="notifications.dismiss(n.id)" aria-label="Fechar">×</button>
        </div>
      }
    </div>
  `,
  styles: `
    .toasts { position: fixed; right: 1rem; bottom: 1rem; display: grid; gap: 0.5rem; z-index: 10; }
    .toast { display: flex; gap: 1rem; align-items: center; padding: 0.75rem 1rem; border-radius: 0.5rem; background: var(--surface); border: 1px solid var(--border); }
    .toast.error { border-color: var(--danger); }
    .toast button { background: none; border: 0; cursor: pointer; color: inherit; font-size: 1.25rem; line-height: 1; }
  `,
})
export class Toasts {
  protected readonly notifications = inject(NotificationService);
}
