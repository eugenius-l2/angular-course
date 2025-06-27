import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
    selector: 'app-level-with-module-second',
    template: 'with second module {{ counterService.value() }}',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class LevelWithModuleSecondComponent {
  counterService = inject(CounterService);
}
