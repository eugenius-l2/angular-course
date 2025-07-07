import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindingComponent } from './binding/binding.component';
import { ContentComponent } from './content/content.component';
import { ViewComponent } from './view/view.component';

@Component({
	selector: 'app-interaction',
	templateUrl: './interaction.component.html',
	imports: [CommonModule, BindingComponent, ContentComponent, ViewComponent],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class InteractionComponent {}
