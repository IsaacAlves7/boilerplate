import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Início',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
  },
  {
    path: 'sobre',
    title: 'Sobre',
    loadComponent: () => import('./features/about/about').then((m) => m.About),
  },
  {
    path: '**',
    title: 'Página não encontrada',
    loadComponent: () => import('./features/not-found/not-found').then((m) => m.NotFound),
  },
];
