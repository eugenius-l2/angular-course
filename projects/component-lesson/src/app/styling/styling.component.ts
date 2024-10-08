import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-styling',
  standalone: true,
  imports: [],
  templateUrl: './styling.component.html',
  styleUrl: './styling.component.scss',
  // encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StylingComponent {}
