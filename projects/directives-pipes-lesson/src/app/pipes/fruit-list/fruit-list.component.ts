import {
	ApplicationRef,
	ChangeDetectionStrategy,
	Component,
	inject,
	signal
} from '@angular/core';
import { FilterPipe } from './filter.pipe';

@Component({
	selector: 'app-fruit-list',
	templateUrl: './fruit-list.component.html',
	styleUrl: './fruit-list.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [FilterPipe]
})
export class FruitListComponent {
	appRef = inject(ApplicationRef);
	fruits = signal(['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple']);
	filter = signal('');

	onAction(): void {
		console.log('Action performed');
	}
}
