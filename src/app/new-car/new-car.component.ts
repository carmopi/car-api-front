import { Component, OnInit } from '@angular/core';

import { CarService } from '../services/car.service';
import { Car } from '../model/car.model';
@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.css']
})
export class NewCarComponent implements OnInit {
  
 

 

  constructor(private carService: CarService) { }

  brand!: string;
  country!: string;
  registration!: Date;


  ngOnInit(): void {
    
    
  }

  addCar(){
    const car: Car = new Car (this.brand, this.country, this.registration);
    console.log(car);
    this.carService.addCar(car).subscribe();
  }
}
