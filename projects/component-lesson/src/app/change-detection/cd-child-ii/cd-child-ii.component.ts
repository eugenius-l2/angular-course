import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import { DatePipe } from '@angular/common';
import { CdChildIIIComponent } from '../cd-child-iii/cd-child-iii.component';
import { FormsModule } from '@angular/forms';
import { TimeChecker } from '../change-detection.component';
import { interval, map, Observable } from 'rxjs';

@Component({
    selector: 'app-cd-child-ii',
    templateUrl: './cd-child-ii.component.html',
    styleUrls: ['./cd-child-ii.component.scss'],
    // changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CdChildIIIComponent, FormsModule, DatePipe]
})
export class CdChildIIComponent {
  checker = new TimeChecker();

  value: string = '';
  value$: Observable<string>;

  constructor(private cdr: ChangeDetectorRef) {
    // interval(1000).subscribe((res) => {
    //   this.value = String(res);
    //   this.cdr.markForCheck();
    // });

    // this.value$ = interval(1000)
    // .pipe(
    //   map((res) => String(res))
    // );
  }
}
