import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardPageComponent } from './pages/board-page/board-page.component';
import { CreateTaskPageComponent } from './pages/create-task-page/create-task-page.component';
import { EditTaskPageComponent } from './pages/edit-task-page/edit-task-page.component';


const routes: Routes = [
  { path: '', component: BoardPageComponent },
  { path: 'create-task/:name', component: CreateTaskPageComponent },
  { path: 'edit-task', component: EditTaskPageComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardRoutingModule { }
