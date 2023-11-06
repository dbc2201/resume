import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
	declarations: [AppComponent, ProfileComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HeaderComponent,
		FooterComponent,
		HomeComponent,
		PageNotFoundComponent,
	],
	providers: [],
	bootstrap: [AppComponent],
	exports: [
    ProfileComponent
  ],
})
export class AppModule {}
