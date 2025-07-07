import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CounterService } from './counter.service';
import { LevelFirstComponent } from './level-first.component';
import { LevelSecondComponent } from './level-second.component';

@Component({
	selector: 'app-level-host',
	template: `
		<h2 class="mb-3 font-bold">app-level-host</h2>
		<button
			class="px-3 py-1 bg-blue-600 text-white rounded"
			(click)="counterService.increment()">
			Increment
		</button>
		<app-level-first />
		<app-level-second />
	`,
	styles: [':host { display: flex; flex-direction: column; gap: 1rem; }'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [LevelFirstComponent, LevelSecondComponent]
})
export class OverviewHostComponent {
	counterService = inject(CounterService);
}
