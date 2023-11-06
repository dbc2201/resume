import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { ExperienceComponent } from './experience/experience.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
	declarations: [AppComponent, ProfileComponent, ExperienceComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HeaderComponent,
		FooterComponent,
		HomeComponent,
		PageNotFoundComponent,
		NgChartsModule,
	],
	providers: [],
	bootstrap: [AppComponent],
	exports: [ProfileComponent, ExperienceComponent],
})
export class AppModule {}
