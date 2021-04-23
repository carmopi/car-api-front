import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../services/car.service';
import { Car } from '../model/car.model';



@Component({
  selector: 'app-car-updated',
  templateUrl: './car-updated.component.html',
  styleUrls: ['./car-updated.component.css']
})
export class CarUpdatedComponent implements OnInit {

  public brand!: string;
  public country!: string;
  public registration!: Date;
  public createdAt!: Date;
  public lastUpdate!: Date;

  public carId: string = this.route.snapshot.paramMap.get('carId');
  public car: Car;


  constructor(private carService: CarService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCar(this.carId);
  }

  getCar(id: string){
     this.carService.getCar(this.carId).subscribe(res => this.car = res);
   
  }

  updateCar(){
    
    this.carService.updateCar(this.carId, this.car).subscribe();
    this.router.navigate(['/cars', this.carId]);
   
  }
}
