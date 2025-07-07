import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
	selector: 'app-level-third',
	template: `
		<h2 class="mb-3 font-bold">app-level-third</h2>
		third {{ counterService.value() }}
	`,
	styles: [
		':host { display: flex; flex-direction: column; @apply w-full bg-violet-300 p-5 }'
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LevelThirdComponent {
	counterService = inject(CounterService);
}
