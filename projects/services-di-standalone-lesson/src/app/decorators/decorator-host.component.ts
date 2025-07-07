import {
	ChangeDetectionStrategy,
	Component,
	Host,
	Inject,
	Optional
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecoratorFirstComponent } from './decorator-first.component';
import { VALUE } from '../token';

@Component({
	selector: 'app-decorator-host',
	styles: [
		':host { display: flex; flex-direction: column; @apply w-full bg-red-300 p-5 } '
	],
	template: `
		<h2 class="text-lg font-bold">Parent</h2>
		value - {{ value }}
		<app-decorator-first />
	`,
	providers: [
		{
			provide: VALUE,
			useValue: 'host'
		}
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [CommonModule, DecoratorFirstComponent]
})
export class DecoratorHostComponent {
	constructor(@Inject(VALUE) public value: string) {}
}
