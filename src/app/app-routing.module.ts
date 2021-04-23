import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarsComponent } from './cars/cars.component';
import { NewCarComponent } from './new-car/new-car.component';

const routes: Routes = [
  {path: 'cars', component: CarsComponent},
  {path: 'cars/:carId', component: CarDetailsComponent},
  {path: 'createcar', component: NewCarComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

