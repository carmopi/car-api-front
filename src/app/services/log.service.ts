import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LogService {

  private url = "http://localhost:8080/car-app/authenticatiton";
  
  constructor(private httpClient: HttpClient) { }


  public login(username:string, password: string): Observable<Object>{
    const headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
    return this.httpClient.post(`${this.url}?username=${username}&password=${password}`, headers,{observe:'response'});
  }

}
