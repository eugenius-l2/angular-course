import {
	ApplicationConfig,
	provideZoneChangeDetection,
	provideZonelessChangeDetection
} from '@angular/core';

export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({ eventCoalescing: true })
		// provideZonelessChangeDetection()
	]
};
