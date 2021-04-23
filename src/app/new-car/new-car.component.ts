import { Component, OnInit } from '@angular/core';

import { CarService } from '../services/car.service';
import { Car } from '../model/car.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.css']
})
export class NewCarComponent implements OnInit {
  
 

 

  constructor(private carService: CarService, private router: Router) { }

  public brand!: string;
  public country!: string;
  public registration!: Date;


  ngOnInit(): void {
    
    
  }

  addCar(){
    const car: Car = new Car (this.brand, this.country, this.registration);
    console.log(car);
    this.carService.addCar(car).subscribe();
    this.router.navigate(['cars'])
  }
}
