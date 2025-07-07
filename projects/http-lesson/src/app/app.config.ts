import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {
	ApplicationConfig,
	provideBrowserGlobalErrorListeners,
	provideZonelessChangeDetection
} from '@angular/core';
import { requestInterceptor } from './request.interceptor';
import { responseInterceptor } from './response.interceptor';

export const appConfig: ApplicationConfig = {
	providers: [
		provideBrowserGlobalErrorListeners(),
		provideZonelessChangeDetection(),
		provideHttpClient(withInterceptors([requestInterceptor, responseInterceptor]))
	]
};
