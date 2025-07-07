import {
	ChangeDetectionStrategy,
	Component,
	Directive,
	Input,
	TemplateRef,
	ViewContainerRef
} from '@angular/core';

@Directive({
	selector: '[customNgIf]',
	standalone: true
})
export class CustomNgIfDirective {
	@Input() set while(condition: boolean) {
		if (condition) {
			this.viewContainerRef.createEmbeddedView(this.tempalateRef);
		} else {
			this.viewContainerRef.clear();
		}
	}

	constructor(
		private tempalateRef: TemplateRef<unknown>,
		private viewContainerRef: ViewContainerRef
	) {}
}

@Component({
	selector: 'app-custom-ngif',
	imports: [CustomNgIfDirective],
	template: `
		<button class="px-3 py-1 bg-blue-600 text-white rounded" (click)="onClick()">
			Click
		</button>
		<ng-template customNgIf [while]="isShow"><div>Hello World!</div></ng-template>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomNgifComponent {
	isShow: boolean = true;

	onClick(): void {
		this.isShow = !this.isShow;
	}
}
