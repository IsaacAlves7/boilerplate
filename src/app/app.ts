import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header';
import { Toasts } from './shared/ui/toasts';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Toasts],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-header />
    <main>
      <router-outlet />
    </main>
    <app-toasts />
  `,
  styles: `main { max-width: 56rem; margin: 0 auto; padding: 2rem 1.5rem; }`,
})
export class App {}
