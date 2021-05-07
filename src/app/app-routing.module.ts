import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarUpdatedComponent } from './car-updated/car-updated.component';
import { CarsComponent } from './cars/cars.component';
import { GuardGuard } from './guard/guard.guard';
import { LoginComponent } from './login/login.component';
import { NewCarComponent } from './new-car/new-car.component';


const routes: Routes = [
  {path: "", redirectTo: "/cars", pathMatch: "full" },
  {path: "login", component: LoginComponent},
  {path: 'cars', component: CarsComponent, canActivate: [GuardGuard]},
  {path: 'cars/:carId', component: CarDetailsComponent, canActivate: [GuardGuard]},
  {path: 'createcar', component: NewCarComponent, canActivate: [GuardGuard]},
  {path: 'update/:carId', component: CarUpdatedComponent, canActivate: [GuardGuard]}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

