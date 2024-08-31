import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { workWithObservables } from './base-observables';
import { workWithSignals } from './base-signals';
import { RxjsVsSignals } from './rxjs-vs-signal.component';
import { workWithSchedulars } from './scheduler';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RxjsVsSignals],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'rxjs-signals';

  constructor() {
    // workWithObservables();
    // workWithSignals();
    // workWithSchedulars();
  }
}
