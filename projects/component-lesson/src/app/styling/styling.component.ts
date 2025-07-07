import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardComponent } from './card/card.component';

@Component({
	selector: 'app-styling',
	imports: [CardComponent],
	templateUrl: './styling.component.html',
	styleUrl: './styling.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class StylingComponent {}
