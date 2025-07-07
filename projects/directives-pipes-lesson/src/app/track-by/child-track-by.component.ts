import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnDestroy,
  OnInit,
  output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from './track-by.component';

@Component({
    selector: 'app-child-track-by',
    imports: [CommonModule],
    template: `
    {{ item().num }} - <button (click)="delete.emit(item())">Remove</button>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CildTrackByComponent implements OnInit, OnDestroy {
  item = input.required<Item>();
  delete = output<Item>();

  ngOnInit(): void {
    console.log('init', this.item().num);
  }

  ngOnDestroy(): void {
    console.log('destroy', this.item().num);
  }
}
