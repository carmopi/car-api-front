import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarService } from './services/car.service';
import { CarsComponent } from './cars/cars.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { NewCarComponent } from './new-car/new-car.component';
import { FormsModule } from '@angular/forms';
import { CarUpdatedComponent } from './car-updated/car-updated.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarDetailsComponent,
    NewCarComponent,
    CarUpdatedComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule, 
    BrowserAnimationsModule,
    MaterialModule
  
   

  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }