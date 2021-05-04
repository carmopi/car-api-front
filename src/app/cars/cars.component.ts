import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../model/car.model';
import { CarService } from '../services/car.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { ICar } from '../model/car.model';
import { BrandService } from '../services/brand.service';
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {




  result: Observable<Array<Object>> = this.carService.getCars();



  displayedColumns = ['id', 'brand', 'country', 'registration'];
  dataSource: MatTableDataSource<ICar>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private carService: CarService, private router: Router, private brandService: BrandService) {
    this.carService.getCars().subscribe((response:any) => {
      let mappedCars: Array<ICar> = [];
      response.forEach(car => {
        let mappedObject: ICar = {
          id: car.id,
          brand: car.brand.name,
          country: car.country.name,
          createdAt: car.createdAt,
          registration: car.registration,
          lastUpdate: car.lastUpdate,

        }

        mappedCars.push(mappedObject);

      })
      this.dataSource = new MatTableDataSource(mappedCars);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

  }


  ngOnInit(): void {

  }






  applyFilter(event: Event) {

    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



  getCar(ev: any) {
    const currentCar = ev.currentTarget.id;
    this.router.navigate(['/cars/', currentCar])
  }






}
