import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api-front';


  constructor(private cookieService: CookieService){}



  logout(){
    this.cookieService.delete('token');
    window.location.reload();
  }
}
