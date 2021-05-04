import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../model/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {


  private url = "http://localhost:8080/car-app-1.0.0-SNAPSHOT/brands";

  constructor(private httpClient: HttpClient) { }




  /**GET brands form the server */
  getBrands(): Observable<Array<Brand>>{
    return this.httpClient.get<Array<Brand>>(this.url);
  }

  /**GET brand from the server  */
  getBrand(id:string): Observable<Brand>{
    return this.httpClient.get<Brand>(`${this.url}/${id}`);

  }

  /**PUT: update a brand on the server  */
  updateBrand(id: string, brand: Brand): Observable<Brand>{
    return this.httpClient.put<Brand>(`${this.url}/${id}`, brand);
  }
}
