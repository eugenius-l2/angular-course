import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-on-destroy-method',
    imports: [CommonModule],
    templateUrl: './on-destroy-method.component.html',
    styleUrls: ['./on-destroy-method.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnDestroyMethodComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    console.log('OnDestroyMethodComponent is initialized');
  }

  ngOnDestroy(): void {
    console.log('OnDestroyMethodComponent is destroyed');
  }
}
