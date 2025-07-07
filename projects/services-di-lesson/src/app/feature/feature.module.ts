import { NgModule } from '@angular/core';
import { CounterService } from '../counter.service';
import { RouterModule } from '@angular/router';
import { FeatureComponent } from './feature.component';

@NgModule({
	declarations: [FeatureComponent],
	imports: [
		RouterModule.forChild([
			{
				path: '',
				component: FeatureComponent
			}
		])
	],
	exports: [FeatureComponent],
	providers: [CounterService]
})
export class FeatureModule {}
