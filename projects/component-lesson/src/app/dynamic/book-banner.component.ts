import { Component, input } from '@angular/core';

@Component({
	selector: 'book-banner',
	standalone: true,
	template: `
		<div class="p-4 border rounded shadow bg-white">
			<h2 class="text-xl font-bold">📚 Read More Books!</h2>
			<p class="text-sm mt-1">Get 50% off all eBooks this week only.</p>
			<span class="text-s mt-1 text-gray">{{ id() }}</span>
		</div>
	`
})
export class BookBannerComponent {
	id = input<string>();
}
