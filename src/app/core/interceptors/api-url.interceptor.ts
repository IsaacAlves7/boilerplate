import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { APP_CONFIG } from '../config/app-config.token';

/** Prefixa URLs relativas (ex.: '/posts') com a apiUrl do ambiente. */
export const apiUrlInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.startsWith('http')) return next(req);
  const { apiUrl } = inject(APP_CONFIG);
  return next(req.clone({ url: `${apiUrl}${req.url}` }));
};
