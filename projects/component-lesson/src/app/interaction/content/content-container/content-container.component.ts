import {
	ChangeDetectionStrategy,
	Component,
	contentChild,
	contentChildren
} from '@angular/core';
import { CheckboxListComponent } from '../../shared/checkbox-list/checkbox-list.component';
import { ExpansionPanelComponent } from '../../shared/expansion-panel/expansion-panel.component';

@Component({
	selector: 'app-content-container',
	templateUrl: './content-container.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentContainerComponent {
	child = contentChild.required<CheckboxListComponent>(CheckboxListComponent);
	// @ContentChild(CheckboxListComponent, { static: true }) child: CheckboxListComponent;

	children = contentChildren<ExpansionPanelComponent>(ExpansionPanelComponent);
	// @ContentChildren(ExpansionPanelComponent) children: QueryList<ExpansionPanelComponent>;

	ngOnInit(): void {
		console.log('OnInit');
		console.log('Child', this.child());
		console.log('Children', this.children());
	}

	ngAfterContentInit(): void {
		console.log('AfterContentInit');
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
