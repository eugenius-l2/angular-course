import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-lazy',
    imports: [],
    templateUrl: './lazy.component.html',
    styleUrl: './lazy.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LazyComponent {

}
