import { HttpInterceptorFn } from '@angular/common/http';

export const requestInterceptor: HttpInterceptorFn = (req, next) => {
	const cloneReq = req.clone({
		headers: req.headers.set('session', '000')
	});

	return next(cloneReq);
};
