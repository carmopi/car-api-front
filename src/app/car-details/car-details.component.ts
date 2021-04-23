import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CarService } from '../services/car.service';
import { Car } from '../model/car.model';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  carId: string = this.route.snapshot.paramMap.get('carId');
  car: Observable<Car> = this.carService.getCar(this.carId);


  constructor(private carService: CarService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
   

  }


 
 }



