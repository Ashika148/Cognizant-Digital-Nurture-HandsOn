import { HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  const startTime = Date.now();
  console.log(`[HTTP] Request → ${req.method} ${req.url}`);

  return next(req).pipe(
    tap({
      next: (event) => {
        console.log(`[HTTP] Response ← ${req.method} ${req.url}`, event);
      },
      error: (error) => {
        const duration = Date.now() - startTime;
        console.error(`[HTTP] Error ✗ ${req.method} ${req.url} (${duration}ms)`, error);
      },
      complete: () => {
        const duration = Date.now() - startTime;
        console.log(`[HTTP] Completed ✓ ${req.method} ${req.url} (${duration}ms)`);
      },
    })
  );
};
