import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Country } from '../model/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {


  private url = "http://localhost:8080/car-app/countries";

  private headers = new HttpHeaders()
        .set('Authorization', this.cookieService.get('token')); 

  constructor(private httpClient: HttpClient, private cookieService: CookieService) { }


  /** GET countries from the server */
  getCountries(): Observable<Array<Country>> {
    return this.httpClient.get<Array<Country>>(this.url, {headers: this.headers});

  }

  /**GET country from the server  */
  getCountry(id: string): Observable<Country> {
    return this.httpClient.get<Country>(`${this.url}/${id}`, {headers: this.headers});

  }

  

}
