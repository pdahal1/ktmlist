import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EventService } from './event.service';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatRadioModule } from '@angular/material/radio';


import { TokenInterceptorService } from './token-interceptor.service';
import { ListingsComponent } from './listings/listings.component';
import { AccountComponent } from './account/account.component';
import { AddListingComponent } from './account/add-listing/add-listing.component';
import { ViewListingsComponent } from './account/view-listings/view-listings.component';
import { ViewAccountComponent } from './account/view-account/view-account.component';
import { HomeComponent } from './home/home.component';
import {  MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LearnComponent } from './learn/learn.component';

@NgModule({
	declarations: [
		AppComponent,
		RegisterComponent,
		LoginComponent,
		EventsComponent,
		ListingsComponent,
		AccountComponent,
		AddListingComponent,
		ViewListingsComponent,
		ViewAccountComponent,
		HomeComponent,
		LearnComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		MatInputModule,
		MatButtonModule,
		MatCheckboxModule,
		MatChipsModule,
		MatCardModule, 
		MatSelectModule,
		MatButtonToggleModule,
		MatSlideToggleModule,
		MatRadioModule
		
	],
	providers: [
		AuthService,
		EventService,
		AuthService,
		LoginComponent,
		AddListingComponent,
		AppComponent,

		{
			provide: HTTP_INTERCEPTORS,
			useClass: TokenInterceptorService,
			multi: true
		}
	],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
