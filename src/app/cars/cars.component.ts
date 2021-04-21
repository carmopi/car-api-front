import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../model/car.model';
import { CarService } from '../services/car.service';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  result: Observable<Array<Object>> = this.carService.getCars();

  constructor(private carService:CarService) { }

  ngOnInit(): void {
    
  }


}