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
import { ContactComponent } from './contact/contact.component';

@NgModule({
	declarations: [
		AppComponent,
		ProfileComponent,
		ExperienceComponent,
		ContactComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgChartsModule,
		HeaderComponent,
		FooterComponent,
		HomeComponent,
		PageNotFoundComponent,
	],
	providers: [],
	bootstrap: [AppComponent],
	exports: [ProfileComponent, ExperienceComponent, ContactComponent],
})
export class AppModule {}
