import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarUpdatedComponent } from './car-updated/car-updated.component';
import { CarsComponent } from './cars/cars.component';
import { NewCarComponent } from './new-car/new-car.component';


const routes: Routes = [
  {path: "", redirectTo: "/cars", pathMatch: "full" },
  {path: 'cars', component: CarsComponent},
  {path: 'cars/:carId', component: CarDetailsComponent},
  {path: 'createcar', component: NewCarComponent},
  {path: 'update/:carId', component: CarUpdatedComponent}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

