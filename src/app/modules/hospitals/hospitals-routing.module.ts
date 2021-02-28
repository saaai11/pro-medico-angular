import { HospitalsComponent } from './../dashboard/hospitals/hospitals.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    component: HospitalsComponent
  },

  {
    path : 'appointments',
    loadChildren: () => import('src/app/modules/hospitals/appointments/appointments.module').then((m => m.AppointmentsModule))
  },

  {
    path : 'login',
    loadChildren: () => import('src/app/modules/hospitals/login/login.module').then((m => m.LoginModule))
  },

  {
    path : 'profile',
    loadChildren: () => import('src/app/modules/hospitals/profile/profile.module').then((m => m.ProfileModule))
  },

  {
    path : 'register',
    loadChildren: () => import('src/app/modules/hospitals/register/register.module').then((m => m.RegisterModule ))
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospitalsRoutingModule { }
