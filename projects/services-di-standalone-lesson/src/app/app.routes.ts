import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'lazy',
		loadComponent: () => import('./level/lazy.component').then((m) => m.LazyComponent)
	}
];
