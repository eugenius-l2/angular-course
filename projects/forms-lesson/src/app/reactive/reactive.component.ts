import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
	selector: 'app-reactive',
	imports: [ReactiveFormsModule, NgClass],
	templateUrl: './reactive.component.html',
	styleUrls: ['./reactive.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReactiveComponent {
	fb = inject(FormBuilder);
	form = this.fb.group({
		name: ['', [Validators.required, Validators.minLength(3)]],
		password: ['', Validators.required]
	});

	onSave(): void {
		console.log(this.form.getRawValue());
	}
}
