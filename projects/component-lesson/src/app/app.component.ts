import { Component, ViewEncapsulation } from '@angular/core';
import { StylingComponent } from './styling/styling.component';
import { InteractionComponent } from './interaction/interaction.component';
import { LifecyclesComponent } from './lifecycles/lifecycles.component';
import { OnChangesComponent } from './lifecycles/on-changes/on-changes.component';
import { DoCheckComponent } from './lifecycles/do-check/do-check.component';
import { AfterContentComponent } from './lifecycles/after-content/after-content.component';
import { ChildAfterContentComponent } from './lifecycles/after-content/child-after-content/child-after-content.component';
import { AfterViewComponent } from './lifecycles/after-view/after-view.component';
import { OnDestroyComponent } from './lifecycles/on-destroy/on-destroy.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { DynamicComponent } from './dynamic/dynamic.component';

@Component({
	selector: 'app-root',
	imports: [
		StylingComponent,
		InteractionComponent,
		LifecyclesComponent,
		OnChangesComponent,
		DoCheckComponent,
		AfterContentComponent,
		ChildAfterContentComponent,
		AfterViewComponent,
		OnDestroyComponent,
		ChangeDetectionComponent,
		DynamicComponent
	],
	templateUrl: './app.component.html'
})
export class AppComponent {
	title = 'component-lesson';
}
