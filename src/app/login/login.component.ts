import { CookedRawString } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LogService } from '../services/log.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private logService: LogService, private cookieService: CookieService, private router: Router) { }

  public username: string;
  public password: string;
  
  ngOnInit(): void {

  
  }

  login(){
    this.logService.login(this.username, this.password).subscribe((data:any) =>{
      if(data.status == 200){
        let token: string = data.headers.get('Authorization');
        this.cookieService.set('token', token);
        this.router.navigate(['/']);

      }

    })
  }
}
