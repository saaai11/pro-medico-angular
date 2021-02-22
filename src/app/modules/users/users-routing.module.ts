import { UsersComponent } from './users.component';
import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    component: UsersComponent
  },

  {
    path : 'registration',
    loadChildren: () => import('src/app/modules/users/userregistration/userregistration.module').then((m => m.UserregistrationModule))
  },

  {
    path : 'login',
    loadChildren: () => import('src/app/modules/users/userlogin/userlogin.module').then((m => m.UserloginModule))
  },

  {
    path : 'profile',
    loadChildren: () => import('src/app/modules/users/userprofile/userprofile.module').then((m => m.UserprofileModule))
  }


];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
    exports: [RouterModule]
})
export class UsersRoutingModule { }
