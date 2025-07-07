import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgXxxComponent } from './ng-xxx/ng-xxx.component';
import { CompositionComponent } from './directives/composition/composition.component';
import { CustomNgifComponent } from './directives/structural/custom-ngif/custom-ngif.component';
import { CustomNgforComponent } from './directives/structural/custom-ngfor/custom-ngfor.component';
import { ExportAsComponent } from './directives/export-as/export-as.component';
import { TrackByComponent } from './track-by/track-by.component';
import { FruitListComponent } from './pipes/fruit-list/fruit-list.component';

@Component({
	selector: 'app-root',
	imports: [
		RouterOutlet,
		NgXxxComponent,
		CompositionComponent,
		CustomNgifComponent,
		CustomNgforComponent,
		ExportAsComponent,
		TrackByComponent,
		FruitListComponent
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
	title = 'directives-pipes-lesson';
}
