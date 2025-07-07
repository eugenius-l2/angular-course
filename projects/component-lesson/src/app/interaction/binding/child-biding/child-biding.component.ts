import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	input,
	Input,
	InputSignal,
	output,
	Output
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../binding.component';

@Component({
	selector: 'app-child-biding',
	imports: [CommonModule],
	templateUrl: './child-biding.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildBidingComponent {
	users: InputSignal<User[] | undefined> = input<User[]>();
	// @Input() users: User[];

	title = input<string>('DEFAULT TITLE', {
		// alias: 'blockTitle',
		// transform: (v: string) => v.toUpperCase(),
		// booleanAttribute, numberAttribute
	});
	// @Input({
	//   required: true,
	//   alias: 'blockTitle',
	//   // booleanAttribute, numberAttribute
	//   transform: (value: string) => value.toUpperCase(),
	// })
	// title: string;

	deleteUser = output<User>({ alias: 'delete' });
	// @Output('delete') deleteUser: EventEmitter<User> = new EventEmitter<User>();
}
