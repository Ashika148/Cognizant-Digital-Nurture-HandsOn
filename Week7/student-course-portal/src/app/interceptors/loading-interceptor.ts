import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../services/loading';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);
  loadingService.show();

  return next(req).pipe(
    // finalize runs whether the Observable completes or errors — equivalent
    // to a try/catch/finally block — making it the correct place to hide
    // the spinner regardless of success or failure.
    finalize(() => loadingService.hide())
  );
};
