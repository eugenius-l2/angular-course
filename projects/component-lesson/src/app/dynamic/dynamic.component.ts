import {
	ChangeDetectionStrategy,
	Component,
	ViewChild,
	ViewContainerRef
} from '@angular/core';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { RefDirective } from './ref.directive';
import { BookBannerComponent } from './book-banner.component';
import { TechBannerComponent } from './tech-banner.component';
import { VacationBannerComponent } from './vacation-banner.component';

export interface Book {
	title: string;
	author: string;
}
@Component({
	selector: 'app-dynamic',
	imports: [RefDirective, NgComponentOutlet],
	templateUrl: './dynamic.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicComponent {
	@ViewChild(RefDirective, { static: true }) container: RefDirective;
	// @ViewChild('containerRef', { read: ViewContainerRef }) container: ViewContainerRef;

	private bannerComponents = [
		{ component: BookBannerComponent, id: '1' },
		{ component: TechBannerComponent, id: '2' },
		{ component: VacationBannerComponent, id: '3' }
	];

	private currentIndex: number = -1;

	currentBanner = this.bannerComponents[0];

	showNextBanner(): void {
		this.container.ref.clear();

		this.currentIndex = (this.currentIndex + 1) % this.bannerComponents.length;
		const componentData = this.bannerComponents[this.currentIndex];

		const ref = this.container.ref.createComponent(componentData.component);
		ref.setInput('id', componentData.id);
	}

	// showNextBanner(): void {
	// 	const nextIndex =
	// 		(this.bannerComponents.indexOf(this.currentBanner) + 1) %
	// 		this.bannerComponents.length;
	// 	this.currentBanner = this.bannerComponents[nextIndex];
	// }
}
