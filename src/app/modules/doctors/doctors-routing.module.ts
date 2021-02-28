import { DoctorsComponent } from './doctors.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    component: DoctorsComponent
  },

  {
    path : 'registration',
    loadChildren: () => import('src/app/modules/doctors/doctorregistration/doctorregistration.module').then((m => m.DoctorregistrationModule))
  },

  {
    path : 'login',
    loadChildren: () => import('src/app/modules/doctors/doctorslogin/doctorslogin.module').then((m => m.DoctorsloginModule))
  },

  {
    path : 'profile',
    loadChildren: () => import('src/app/modules/doctors/doctorsprofile/doctorsprofile.module').then((m => m.DoctorsprofileModule))
  },

  {
    path : 'appointments',
    loadChildren: () => import('src/app/modules/doctors/appointments/appointments.module').then((m => m.AppointmentsModule))
  }

];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
    exports: [RouterModule]
})
export class DoctorsRoutingModule { }
