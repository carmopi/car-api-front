import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Car } from '../model/car.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})

export class CarService {

  private url = "http://localhost:8080/car-app/cars";




  constructor(private httpClient: HttpClient) { }


  /**GET cars from de server */
  getCars(): Observable<Array<Object>>{
    return this.httpClient.get<Array<Object>>(this.url);
 
  }

  /**GET information of one specific car */
  getCar(id: string): Observable<any>{
    return this.httpClient.get<any>(`${this.url}/${id}`, httpOptions);
  }

  /**DELETE a car */
  deleteCar(id: string): Observable<any>{
    return this.httpClient.delete<any>(`${this.url}/${id}`, httpOptions);
     
  }

  /** POST: add a new car on the server */
  addCar(car : Car): Observable<any>{
    return this.httpClient.post<any>(this.url, car, httpOptions);
  }


  /**PUT: update a car on the server */
  updateCar(id: string , car: Car): Observable<any>{
    return this.httpClient.put<any>(`${this.url}/${id}`,car, httpOptions);
  }
}
