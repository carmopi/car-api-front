import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Brand } from '../model/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {


  private url = "http://localhost:8080/car-app/brands";

  private headers = new HttpHeaders()
        .set('Authorization', this.cookieService.get('token'));

  constructor(private httpClient: HttpClient, private cookieService: CookieService) { }




  /**GET brands form the server */
  getBrands(): Observable<Array<Brand>>{
    return this.httpClient.get<Array<Brand>>(this.url, {headers: this.headers});
  }

  /**GET brand from the server  */
  getBrand(id:string): Observable<Brand>{
    return this.httpClient.get<Brand>(`${this.url}/${id}`, {headers: this.headers});

  }

}
