import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  public loginData = this.loginService.loginData;

  public passwordData = this.loginService.passwordData;


  ngOnInit() {
    if (localStorage.authToken) {
      this.router.navigateByUrl('/board');
    }
  }

  public login() {
    this.loginService.login(this.loginData, this.passwordData);
    
  }

  public logout() {
    this.loginService.logout();
  }

}
