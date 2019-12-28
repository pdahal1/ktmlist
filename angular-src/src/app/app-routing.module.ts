import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { RegisterComponent } from './register/register.component';

import { AuthGuard } from './auth.guard';
import { ListingsComponent } from './listings/listings.component';
import { AccountComponent } from './account/account.component';
import { AddListingComponent } from './account/add-listing/add-listing.component';
import { ViewAccountComponent } from './account/view-account/view-account.component';
import { ViewListingsComponent } from './account/view-listings/view-listings.component';



const routes: Routes = [
  //{path: '' ,  redirectTo: '/events', pathMatch: 'full'}, 
  {path:'login', component: LoginComponent },
  {path: 'events' , component: EventsComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'listings', component: ListingsComponent },
  { path: 'account', component: AccountComponent },
  { path: 'addlisting', component: AddListingComponent },
  { path: 'viewaccount', component: ViewAccountComponent },
  { path: 'viewlistings', component: ViewListingsComponent },
   // {path: 'special' , component: SpecialComponent, canActivate: [AuthGuard]},
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
