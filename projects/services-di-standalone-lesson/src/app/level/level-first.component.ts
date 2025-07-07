import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
	selector: 'app-level-first',
	template: `
		<h2 class="mb-3 font-bold">app-level-first</h2>
		first {{ counterService.value() }}
	`,
	styles: [':host { @apply w-full bg-green-300 p-5 }'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LevelFirstComponent {
	counterService = inject(CounterService);
}
