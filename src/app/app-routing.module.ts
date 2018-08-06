import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoffeeComponent } from './coffee/coffee.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { CoffeeDetailComponent } from './coffee-detail/coffee-detail.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { MakersComponent } from './makers/makers.component';

const routes: Routes = [
{ path: 'coffees', component: CoffeeComponent },
{ path: 'dashboard', component: DashboardComponent },
{ path: 'detail/:name', component: CoffeeDetailComponent },
{ path: "", component: WelcomeComponent},
{ path: 'makers/:name', component: MakersComponent }
];

@NgModule({
  imports: 
  [ RouterModule.forRoot(routes) ],

  exports: [RouterModule]
 
})
export class AppRoutingModule { }
