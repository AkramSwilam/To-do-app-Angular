import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskComponent } from './components/task/task.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:"add-task",
    component:AddTaskComponent
  },
  {
    path:"task/:id",
    component:TaskComponent
  },
  {
    path:"**",
    component:NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
