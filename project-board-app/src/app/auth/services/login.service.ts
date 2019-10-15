import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

  constructor(private router: Router) { }

  public login() {
    this.router.navigateByUrl('/board');
  }
}
