import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoffeeComponent } from './coffee/coffee.component';

import { FormsModule } from '@angular/forms';
import { CoffeeDetailComponent } from './coffee-detail/coffee-detail.component';

import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { WelcomeComponent } from './welcome/welcome.component';
import { MakersComponent } from './makers/makers.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    CoffeeComponent,
    CoffeeDetailComponent,
    DashboardComponent,
    WelcomeComponent,
    MakersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyCPmGEAFdymQ_cGz6h2c4yGF3Jg9Jsu_vU' })
                               
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
