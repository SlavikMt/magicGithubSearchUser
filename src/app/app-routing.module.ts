import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { UsersDetailsComponent } from './users-details/users-details.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  }
 
  ,
  {
    path: 'users',
    component: UsersComponent,
    //children: [{path:"users/id", component:UsersDetailsComponent }]
  },
  {
    path: 'users/:id',
    component: UsersDetailsComponent,
   
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
