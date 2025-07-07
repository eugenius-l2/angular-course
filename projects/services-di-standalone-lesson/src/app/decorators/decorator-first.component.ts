import {
	ChangeDetectionStrategy,
	Component,
	Host,
	Inject,
	Optional,
	Self,
	SkipSelf,
	inject
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { VALUE } from '../token';

@Component({
	selector: 'app-decorator-first',
	template: `
		<h2 class="text-lg font-bold">Child</h2>
		value - {{ value }}
	`,
	styles: [
		':host { display: flex; flex-direction: column; @apply w-full bg-blue-300 p-5 } '
	],
	providers: [
		{
			provide: VALUE,
			useValue: 'child'
		}
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [CommonModule]
})
export class DecoratorFirstComponent {
	value = inject(VALUE);

	// constructor(@Inject(VALUE) public value: string) {}
	// constructor(@SkipSelf() @Inject(VALUE) public value: string) {}
	// constructor(@Self() @Optional() @Inject(VALUE) public value: string) {
	// 	console.log(value);
	// }
}
