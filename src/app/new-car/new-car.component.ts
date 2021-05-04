import { Component, OnInit } from '@angular/core';

import { CarService } from '../services/car.service';
import { Car } from '../model/car.model';
import { Router } from '@angular/router';
import { Brand } from '../model/brand';
import { Country } from '../model/country';
import { BrandService } from '../services/brand.service';
import { Observable } from 'rxjs';
import { CountryService } from '../services/country.service';
@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.css']
})
export class NewCarComponent implements OnInit {
  
  

 

  constructor(private carService: CarService, private brandService: BrandService, private countryService: CountryService, private router: Router) { }

  public brand!: Brand;
  public country!: Country;
  public registration!: Date;
  brands: Observable<Array<Brand>> = this.brandService.getBrands();
  countries: Observable<Array<Country>> = this.countryService.getCountries();

  ngOnInit(): void {
    
    
  }

  getBrand(ev: any){
    let currentBrand = ev.currentTarget.value;
    this.brandService.getBrand(currentBrand).subscribe(b => this.brand = b);
  }

  getCountry(ev:any){
    let currentCountry = ev.currentTarget.value;
    this.countryService.getCountry(currentCountry).subscribe(c => this.country = c);
  }

  
  addCar(){
    const car: Car = new Car (this.brand, this.country, this.registration);
    console.log(car);
    this.carService.addCar(car).subscribe();
    this.router.navigate(['cars'])
  }
}
