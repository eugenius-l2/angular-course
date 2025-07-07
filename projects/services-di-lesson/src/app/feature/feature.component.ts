import { Component, inject } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
	selector: 'app-feature',
	template: `
		<h2 class="mb-3 font-bold">Component from feature module</h2>
		count - {{ counterService.value() }}
	`,
	standalone: false,
	styles: [
		':host { display: flex; flex-direction: column; @apply w-full bg-red-300 p-5} '
	]
})
export class FeatureComponent {
	counterService = inject(CounterService);
}
