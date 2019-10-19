import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../auth/services/login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  
  public loginData$: string;

  constructor(private loginService: LoginService) { 
    
  }

  ngOnInit() {
  
    this.loginService.loginState$.subscribe(val => {
      this.loginData$ = val;
    });
    if (localStorage.authToken) {
      this.loginService.loginState$.next({ 'credentials': `logged in as: '${localStorage.authToken}'`,
                                            'status': 'Logout' });
    }
  }

  onLogout() {
    this.loginService.logout();
  }

}
