import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimeChecker } from '../change-detection.component';

@Component({
    selector: 'app-cd-child-i',
    imports: [FormsModule, DatePipe],
    templateUrl: './cd-child-i.component.html',
    styleUrls: ['./cd-child-i.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdChildIComponent {
  checker = new TimeChecker();

  value: string = '';
}
