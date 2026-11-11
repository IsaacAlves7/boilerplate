import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1>Página não encontrada</h1>
    <p>O endereço que você abriu não existe.</p>
    <a routerLink="/">Voltar ao início</a>
  `,
})
export class NotFound {}
