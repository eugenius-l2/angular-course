import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OverviewHostComponent } from './level/level-host.component';
import { TokenHostComponent } from './token/token-host.component';
import { DecoratorHostComponent } from './decorators/decorator-host.component';
import { ViewHostComponent } from './view-providers/view-host.component';
import { ViewChildComponent } from './view-providers/view-child.component';

@Component({
	selector: 'app-root',
	imports: [
		RouterOutlet,
		OverviewHostComponent,
		TokenHostComponent,
		DecoratorHostComponent,
		ViewHostComponent,
		ViewChildComponent
	],
	templateUrl: './app.html'
})
export class App {
	protected title = 'services-di-standalone-lesson';
}
