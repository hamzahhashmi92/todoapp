import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TaskViewComponent} from './pages/task-view/task-view.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';


const routes: Routes = [
  {path:'', component:TaskViewComponent},
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
