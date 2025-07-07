import { Component, input } from '@angular/core';

@Component({
	selector: 'vacation-banner',
	standalone: true,
	template: `
		<div class="p-4 border rounded shadow bg-white">
			<h2 class="text-xl font-bold">🌴 Plan Your Vacation</h2>
			<p class="text-sm mt-1">Save 30% on flights and hotels.</p>
			<span class="text-s mt-1 text-gray">{{ id() }}</span>
		</div>
	`
})
export class VacationBannerComponent {
	id = input<string>();
}
