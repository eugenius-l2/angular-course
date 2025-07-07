import { Component, input } from '@angular/core';

@Component({
	selector: 'tech-banner',
	standalone: true,
	template: `
		<div class="p-4 border rounded shadow bg-white">
			<h2 class="text-xl font-bold">🖥️ Upgrade Your Tech!</h2>
			<p class="text-sm mt-1">New laptops starting from $299.</p>
			<span class="text-s mt-1 text-gray">{{ id() }}</span>
		</div>
	`
})
export class TechBannerComponent {
	id = input<string>();
}
