import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, Subject } from 'rxjs';
import { Brand } from '../model/brand';
import { Car } from '../model/car.model';
import { Country } from '../model/country';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})

export class CarService {

  private url = "http://localhost:8080/car-app/cars";

 private headers = new HttpHeaders()
        .set('Authorization', this.cookieService.get('token'));



  constructor(private httpClient: HttpClient, private cookieService: CookieService) { }


  /**GET cars from de server */
  getCars(): Observable<Array<Object>>{
    return this.httpClient.get<Array<Object>>(this.url, {headers: this.headers});
 
  }

  /**GET information of one specific car */
  getCar(id: string): Observable<Car>{
    return this.httpClient.get<Car>(`${this.url}/${id}`, {headers: this.headers});
  }

  /**DELETE a car */
  deleteCar(id: string): Observable<Car>{
    return this.httpClient.delete<Car>(`${this.url}/${id}`, {headers: this.headers});
     
  }

  /** POST: add a new car on the server */
  addCar(car : Car): Observable<Car>{
    return this.httpClient.post<Car>(this.url, car, {headers: this.headers});

  }


  /**PUT: update a car on the server */
  updateCar(id: string , car: Car): Observable<Car>{
    return this.httpClient.put<Car>(`${this.url}/${id}`, car, {headers: this.headers});
  }


}
