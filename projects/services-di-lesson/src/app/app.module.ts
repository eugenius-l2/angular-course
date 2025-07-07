import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureModule } from './feature/feature.module';
import { MainComponent } from './main.component';

@NgModule({
	declarations: [AppComponent, MainComponent],
	imports: [BrowserModule, AppRoutingModule, FeatureModule],
	bootstrap: [AppComponent]
})
export class AppModule {}
