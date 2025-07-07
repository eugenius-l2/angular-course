import { Component, inject } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
	selector: 'app-main',
	template: `
		<h2 class="mb-3 font-bold">Component from app module</h2>
		<button
			class="px-3 py-1 bg-blue-600 text-white rounded"
			(click)="counterService.increment()">
			Increment
		</button>
		count - {{ counterService.value() }}
	`,
	standalone: false,
	styles: [
		':host { display: flex; flex-direction: column; @apply w-full bg-green-300 p-5} '
	]
})
export class MainComponent {
	counterService = inject(CounterService);
}
