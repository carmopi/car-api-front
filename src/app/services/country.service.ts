import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../model/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {


  private url = "http://localhost:8080/car-app-1.0.0-SNAPSHOT/countries";

  constructor(private httpClient: HttpClient) { }


  /** GET countries from the server */
  getCountries(): Observable<Array<Country>> {
    return this.httpClient.get<Array<Country>>(this.url);

  }

  /**GET country from the server  */
  getCountry(id: string): Observable<Country> {
    return this.httpClient.get<Country>(`${this.url}/${id}`);

  }

  /**PUT: update a car on the server */
  updateCountry(id: string, country: Country): Observable<Country> {
    return this.httpClient.put<Country>(`${this.url}/${id}`, country);
  }

}
