import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
//import { RouterModule } from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { FlightsComponent } from './flights/flights.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports:      [ BrowserModule, AppRoutingModule,HttpClientModule],
  
  declarations: [ AppComponent, FlightsComponent,AdminComponent ],
  
  bootstrap:    [ AppComponent ],
  
  providers:[]


})
export class AppModule { }
