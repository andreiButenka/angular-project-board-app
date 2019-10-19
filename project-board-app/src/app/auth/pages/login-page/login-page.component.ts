import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  public loginData = this.loginService.loginData;

  public passwordData = this.loginService.passwordData;

  public goalCridentials = this.loginService.cridentials;

  ngOnInit() {
  }

  login() {
    this.loginService.login(this.loginData, this.passwordData);
    
  }

  logout() {
    this.loginService.logout();
  }

}
