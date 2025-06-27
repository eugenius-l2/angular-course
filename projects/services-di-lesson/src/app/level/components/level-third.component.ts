import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from '../counter.service';

@Component({
    selector: 'app-level-third',
    imports: [CommonModule],
    template: 'third {{ counterService.value() }}',
    styles: [
        ':host { display: flex; flex-direction: column; @apply w-full bg-violet-300 p-5} ',
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LevelThirdComponent {
  counterService = inject(CounterService);
}
