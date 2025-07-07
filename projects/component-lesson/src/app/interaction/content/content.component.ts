import {
	ChangeDetectionStrategy,
	Component,
	contentChild,
	ContentChild,
	contentChildren,
	ContentChildren,
	QueryList
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentContainerComponent } from './content-container/content-container.component';
import { CheckboxListComponent } from '../shared/checkbox-list/checkbox-list.component';
import { ExpansionPanelComponent } from '../shared/expansion-panel/expansion-panel.component';

@Component({
	selector: 'app-content',
	imports: [
		CommonModule,
		ContentContainerComponent,
		CheckboxListComponent,
		ExpansionPanelComponent
	],
	templateUrl: './content.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentComponent {
	readonly panels = [
		{ title: 'Overview', content: 'Basic overview of the topic.' },
		{ title: 'Details', content: 'In-depth details about the process.' },
		{ title: 'Examples', content: 'Practical examples for better understanding.' }
	];
}
