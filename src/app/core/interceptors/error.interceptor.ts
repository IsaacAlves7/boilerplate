import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { NotificationService } from '../services/notification.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const notifications = inject(NotificationService);
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      notifications.error(
        error.status === 0
          ? 'Sem conexão com o servidor.'
          : `Erro ${error.status}: não foi possível concluir a requisição.`,
      );
      return throwError(() => error);
    }),
  );
};
