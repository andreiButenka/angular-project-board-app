import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../auth/services/login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  
  public loginData$;

  public login;

  constructor(private loginSevice: LoginService) { 
    
  }

  ngOnInit() {
  
    this.loginSevice.loginState$.subscribe(val => {
      this.loginData$ = val;
      console.log('header', val);
    })

    // console.log('header', this.loginSevice.cridentials);
  }

  onLogout() {
    this.loginSevice.logout();
  }

 

}
