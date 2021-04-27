import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../model/car.model';
import { CarService } from '../services/car.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
;
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
 


 result: Observable<Array<Object>> = this.carService.getCars();


  displayedColumns  =  [ 'id', 'brand', 'country', 'registration'];
  dataSource: MatTableDataSource<Car>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
 

  constructor(private carService:CarService, private router: Router) {
    this.carService.getCars().subscribe((response:any) => {
      this.dataSource = new MatTableDataSource(response.cars);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    
   }


  ngOnInit(): void {
   
  }


  

  

  applyFilter(event: Event){
    
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }

 

  getCar(ev: any){
    const currentCar = ev.currentTarget.id;
    this.router.navigate(['/cars/', currentCar])
  }
  

  

 
  
 

}