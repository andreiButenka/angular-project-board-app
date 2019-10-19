import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadingGuard } from './guards/loading-guard';


const routes: Routes = [
  { path: '', redirectTo: 'login-page', pathMatch: 'full' },
  { path: 'login-page', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'board', loadChildren: './board/board.module#BoardModule', canLoad: [LoadingGuard], }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
