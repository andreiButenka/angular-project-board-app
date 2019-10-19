import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoadingGuard implements CanLoad {

  constructor(private router: Router) { }


  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    if (localStorage.authToken) {
      return true;
    }

    this.router.navigateByUrl('/login-page');
   
    return false;
  }

}
