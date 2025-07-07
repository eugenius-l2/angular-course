import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { PanelData } from '../../view/view.component';

@Component({
	selector: 'app-expansion-panel',
	templateUrl: './expansion-panel.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpansionPanelComponent {
	readonly data = input.required<PanelData>();
	private readonly _expanded = signal(false);

	expanded = this._expanded;

	toggleExpansion(): void {
		this._expanded.update((v) => !v);
	}
}
