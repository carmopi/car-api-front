import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';



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

}
