import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
}) 
export class LoginService {

  public loginData: string;

  public passwordData: string;

  public loginState$ = new BehaviorSubject<{ status: string; credentials?: string}>({ 'status': 'Login'});
  
  constructor(private router: Router) { }

  public login(login: string, password: string): void {
 
    if (login && password) {
      localStorage.setItem('authToken', `${login}`);
      this.loginState$.next({ 'credentials': `logged in as: '${localStorage.authToken}'`,
                              'status': 'Logout' });
      
      this.router.navigateByUrl('/board');
    }
  }

  public logout(): void {
    localStorage.clear();
    this.loginState$.next({ 'status': 'Login' });
    this.router.navigateByUrl('/login-page');
  }

 
}
