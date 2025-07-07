import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from '../level/counter.service';
import { COUNTER, RANDOM } from './token-host.component';

@Component({
	selector: 'app-token-first',
	imports: [CommonModule],
	template: `
		first {{ counterService.value() }} <br />
		{{ randomNum }}
	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TokenFirstComponent {
	counterService = inject<CounterService>(COUNTER);
	randomNum = inject(RANDOM);
}
