import { Injectable, signal } from '@angular/core';

export interface Notification {
  id: number;
  type: 'success' | 'error';
  message: string;
}

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private nextId = 0;
  private readonly _items = signal<Notification[]>([]);
  readonly items = this._items.asReadonly();

  success(message: string) {
    this.push('success', message);
  }

  error(message: string) {
    this.push('error', message);
  }

  dismiss(id: number) {
    this._items.update((list) => list.filter((n) => n.id !== id));
  }

  private push(type: Notification['type'], message: string) {
    const id = this.nextId++;
    this._items.update((list) => [...list, { id, type, message }]);
    setTimeout(() => this.dismiss(id), 5000);
  }
}
