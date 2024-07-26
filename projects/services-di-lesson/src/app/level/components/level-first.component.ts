import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-level-first',
  standalone: true,
  imports: [CommonModule],
  template: 'first {{ counterService.value() }}',
  styles: [':host { @apply w-full bg-green-300 p-5 }'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LevelFirstComponent {
  counterService = inject(CounterService);
}
