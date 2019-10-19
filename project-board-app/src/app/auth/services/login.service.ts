import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
}) 
export class LoginService {

  public loginData: string;

  public passwordData: string;

  public loginState$ = new BehaviorSubject<any>({ 'test': 'Login'});
  

  public cridentials = {
    login: 'admin',
    password: 'admin'
  }

  constructor(private router: Router) { }

  public login(login: string, password: string) {
 
    if (login && password) {
      localStorage.setItem('authToken', `${login}${password}`);
      this.loginState$.next({ 'test': `logged in as: ${login} ${password} | logout` });
      // console.log(localStorage);
      
      this.router.navigateByUrl('/board');
    }
  }

  public logout() {
    localStorage.clear();
    this.loginState$.next({ 'test': 'login' });
    this.router.navigateByUrl('/login-page');
  }

  // public onLogin() {
    
  // }
}
