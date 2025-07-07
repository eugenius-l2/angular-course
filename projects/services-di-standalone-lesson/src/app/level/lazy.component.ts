import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
	selector: 'app-lazy',
	template: `
		<h2 class="mb-3 font-bold">Lazy Loaded Component</h2>
		first {{ counterService.value() }}
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
	styles: [':host { display: block; @apply w-full mt-10 bg-pink-300 p-5 }']
})
export class LazyComponent {
	counterService = inject(CounterService);
}
