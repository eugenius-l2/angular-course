import {
	HttpErrorResponse,
	HttpEventType,
	HttpInterceptorFn,
	HttpResponse
} from '@angular/common/http';
import { catchError, of, tap } from 'rxjs';

export const responseInterceptor: HttpInterceptorFn = (req, next) => {
	return next(req).pipe(
		tap((event) => {
			if (event instanceof HttpResponse) {
				console.log('response');
			}
			if (event.type === HttpEventType.DownloadProgress) {
				console.log(`Downloading: ${event.loaded / 1024}Kb`);
			}
		}),
		catchError((err) => {
			if (err instanceof HttpErrorResponse) {
				console.log('error', err);
			}
			return of(err);
		})
	);
};
