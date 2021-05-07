import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../services/car.service';
import { Car } from '../model/car.model';
import { Brand } from '../model/brand';
import { BrandService } from '../services/brand.service';
import { CountryService } from '../services/country.service';
import { Country } from '../model/country';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-car-updated',
  templateUrl: './car-updated.component.html',
  styleUrls: ['./car-updated.component.css']
})
export class CarUpdatedComponent implements OnInit {

  public brand: Brand;
  public country: Country;
  public name!: string;
  public carId: string = this.route.snapshot.paramMap.get('carId');
  public car: Car;
  brands: Observable<Array<Brand>> = this.brandService.getBrands();
  countries: Observable<Array<Country>> = this.countryService.getCountries();



  constructor(private carService: CarService, private brandService: BrandService, private countryService: CountryService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCar(this.carId);
  }



  getBrand(ev: any) {
    let currentBrand = ev.currentTarget.value;
    this.brandService.getBrand(currentBrand).subscribe(b => this.brand = b);
  }

  getCountry(ev: any) {
    let currentCountry = ev.currentTarget.value;
    this.countryService.getCountry(currentCountry).subscribe(c => this.country = c);
  }

  getCar(id: string) {
    this.carService.getCar(this.carId).subscribe(res => this.car = res);

  }



  updateCar() {
    this.car.brand = this.brand;
    this.car.country = this.country;
    this.carService.updateCar(this.carId, this.car).subscribe();

    this.router.navigate(['/cars', this.carId]);

  }




}
