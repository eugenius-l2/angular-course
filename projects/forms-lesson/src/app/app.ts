import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

@Component({
	selector: 'app-root',
	imports: [ReactiveComponent, TemplateDrivenComponent],
	templateUrl: './app.html'
})
export class App {
	protected title = 'forms-lesson';
}
