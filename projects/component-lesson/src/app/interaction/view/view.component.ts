import {
	AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	OnInit,
	QueryList,
	ViewChild,
	ViewChildren,
	viewChild,
	viewChildren
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxListComponent } from '../shared/checkbox-list/checkbox-list.component';
import { ExpansionPanelComponent } from '../shared/expansion-panel/expansion-panel.component';

export interface PanelData {
	title: string;
	content: string;
}

@Component({
	selector: 'app-view',
	templateUrl: './view.component.html',
	imports: [CommonModule, CheckboxListComponent, ExpansionPanelComponent],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewComponent implements OnInit, AfterViewInit {
	// @ViewChild(CheckboxListComponent, { static: true }) child: CheckboxListComponent;
	child = viewChild.required<CheckboxListComponent>(CheckboxListComponent);
	// @ViewChildren(CheckboxListComponent) children: QueryList<CheckboxListComponent>;
	children = viewChildren<ExpansionPanelComponent>(ExpansionPanelComponent);

	readonly panels = [
		{ title: 'Overview', content: 'Basic overview of the topic.' },
		{ title: 'Details', content: 'In-depth details about the process.' },
		{ title: 'Examples', content: 'Practical examples for better understanding.' }
	];

	ngOnInit(): void {
		console.log('OnInit');
		console.log('Child', this.child());
		console.log('Children', this.children());
	}

	ngAfterViewInit(): void {
		console.log('AfterViewInit');
		console.log('Child', this.child());
		console.log('Children', this.children());
	}

	onGetSelection(): void {
		console.log('Selected items:', this.child().selected());
	}

	onTogglePanels(): void {
		this.children().forEach((panel) => panel.toggleExpansion());
	}
}
