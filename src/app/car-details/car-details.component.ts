import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CarService } from '../services/car.service';
import { Car } from '../model/car.model';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  public carId: string = this.route.snapshot.paramMap.get('carId');
  public car: Observable<Car> = this.carService.getCar(this.carId);
 
 

  constructor(private carService: CarService,
              private route: ActivatedRoute,
              private router: Router
              ) { }

  ngOnInit(): void {
   

  }
 
  
  updateCar(){
    this.router.navigate(['update', this.carId]);
  }

  deleteCar(){
   
    this.carService.deleteCar(this.carId).subscribe();
    this.router.navigate(['cars']);

  }
 
 }



