import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
	selector: 'app-checkbox-list',
	templateUrl: './checkbox-list.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxListComponent {
	private readonly _selected = signal<Set<string>>(new Set());

	selected = this._selected;

	toggle(item: string): void {
		const updated = new Set(this._selected());
		updated.has(item) ? updated.delete(item) : updated.add(item);
		this._selected.set(updated);
	}

	isSelected(item: string): boolean {
		return this._selected().has(item);
	}
}
