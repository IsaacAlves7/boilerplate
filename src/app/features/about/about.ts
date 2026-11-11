import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1>Sobre</h1>
    <p>Esta página foi carregada sob demanda (lazy loading) pelo roteador.</p>
    <ul>
      <li>Standalone components (sem NgModules)</li>
      <li>Signals e control flow nativo (&#64;if, &#64;for)</li>
      <li>Zoneless change detection</li>
      <li>TypeScript em modo strict</li>
    </ul>
  `,
})
export class About {}
