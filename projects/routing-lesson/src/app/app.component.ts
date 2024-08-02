import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'routing-lesson';

  activateRoute(e: any, outlet: any): void {
    if (e.log && typeof e.log === 'function') {
      e.log();
    }
    // console.log('activate', e, outlet);
  }

  deactivateRoute(e: any, outlet: any): void {
    // console.log('deactivate', e, outlet);
  }

  onGoToHome(): void {}
}
