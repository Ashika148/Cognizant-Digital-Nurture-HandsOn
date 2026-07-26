import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        console.warn('Unauthorized — redirecting to home.');
        router.navigate(['/']);
      } else if (error.status === 500) {
        console.error('Server error — showing global notification.');
        // In a real app, this would call a NotificationService to show a toast/banner.
        alert('A server error occurred. Please try again later.');
      }
      return throwError(() => error);
    })
  );
};
