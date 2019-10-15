import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';

import { FormsModule } from '@angular/forms';

import { LoginService } from './services/login.service';

import { 
  MatButtonModule, 
  MatInputModule, 
  MatFormFieldModule, 
  MatIconModule, 
  MatToolbarModule, 
  MatListModule,
  MatCardModule
} from '@angular/material';


@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    MatButtonModule, 
    MatInputModule, 
    MatFormFieldModule, 
    MatIconModule, 
    MatToolbarModule, 
    MatListModule,
    MatCardModule
  ],
  providers: [
    LoginService
  ]
})
export class AuthModule { }
