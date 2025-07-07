import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimeChecker } from '../change-detection.component';

@Component({
    selector: 'app-cd-child-iii',
    imports: [FormsModule, DatePipe],
    templateUrl: './cd-child-iii.component.html',
    styleUrls: ['./cd-child-iii.component.scss'],
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdChildIIIComponent {
  fromParent = input<string>('');

  checker = new TimeChecker();

  value: string = '';
}
