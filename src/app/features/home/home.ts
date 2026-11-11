import { httpResource } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface Post {
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly limit = signal(5);

  // Recurso reativo: refaz a requisição quando `limit` muda.
  protected readonly posts = httpResource<Post[]>(() => `/posts?_limit=${this.limit()}`);

  protected more() {
    this.limit.update((n) => n + 5);
  }
}
