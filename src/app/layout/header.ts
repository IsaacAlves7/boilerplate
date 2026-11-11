import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../core/services/theme.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header>
      <a class="brand" routerLink="/">Angular Boilerplate</a>
      <nav aria-label="Principal">
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Início</a>
        <a routerLink="/sobre" routerLinkActive="active">Sobre</a>
        <button type="button" (click)="theme.toggle()" [attr.aria-pressed]="theme.theme() === 'dark'">
          Tema: {{ theme.theme() === 'dark' ? 'escuro' : 'claro' }}
        </button>
      </nav>
    </header>
  `,
  styles: `
    header { display: flex; justify-content: space-between; align-items: center; padding: 1rem 1.5rem; border-bottom: 1px solid var(--border); }
    nav { display: flex; gap: 1rem; align-items: center; }
    .brand { font-weight: 700; text-decoration: none; color: var(--text); }
    nav a { text-decoration: none; color: var(--text-muted); }
    nav a.active { color: var(--accent); font-weight: 600; }
  `,
})
export class Header {
  protected readonly theme = inject(ThemeService);
}
