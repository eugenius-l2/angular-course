import {
	ChangeDetectionStrategy,
	Component,
	Inject,
	InjectionToken,
	inject
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomNumService, randomNumFactory } from './token.service';
import { CounterService } from '../level/counter.service';
import { TokenFirstComponent } from './token-first.component';

export const TITLE = new InjectionToken('title');
export const RANDOM = new InjectionToken('random');
export const COUNTER = new InjectionToken('counter');

@Component({
	selector: 'app-token-host',
	styles: [':host { display: flex; flex-direction: column; gap: 1rem; } '],
	template: `
		{{ title }}
		<button
			class="px-3 py-1 bg-blue-600 text-white rounded"
			(click)="counterService.increment()">
			Increment
		</button>
		<app-token-first />
		{{ randomNum }}
	`,
	providers: [
		CounterService,
		{
			provide: TITLE,
			useValue: 'angular-hints'
		},
		{
			provide: RANDOM,
			useFactory: randomNumFactory
			// deps: [RandomNumService],
		},
		{
			provide: COUNTER,
			useExisting: CounterService
		}
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [CommonModule, TokenFirstComponent]
})
export class TokenHostComponent {
	// title = inject(TITLE);
	counterService = inject<CounterService>(COUNTER);
	randomNum = inject(RANDOM);

	constructor(@Inject(TITLE) public title: string) {}
}
