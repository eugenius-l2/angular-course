import { Component, inject } from '@angular/core';
import { HttpService } from './http.service';
import { AsyncPipe } from '@angular/common';
import { HttpEvent } from '@angular/common/http';

@Component({
	selector: 'app-root',
	imports: [AsyncPipe],
	template: `
		@if (obs$ | async) {
			<ng-container></ng-container>
		}
		@if (obs$ | async) {
			<ng-container></ng-container>
		}
		@if (obs$ | async) {
			<ng-container></ng-container>
		}
		@if (obs$ | async) {
			<ng-container></ng-container>
		}
	`
})
export class App {
	http: HttpService = inject(HttpService);

	obs$ = this.http.get();

	ngOnInit(): void {
		// this.http.get().subscribe(console.log);
		// this.http.getWithParameters().subscribe(console.log);
		this.http.getWithRequest().subscribe((event: HttpEvent<any>) => {
			// switch (event.type) {
			//   case HttpEventType.Sent:
			//     console.log('Sent');
			//     break;
			//   case HttpEventType.DownloadProgress:
			//     console.log(`Downloading: ${event.loaded / 1024}Kb`);
			//     break;
			//   case HttpEventType.Response:
			//     console.log('Finished', event.body);
			// }
		});
	}
}
