import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'doctors',
    loadChildren: () => import('src/app/modules/doctors/doctors.module').then((m => m.DoctorsModule))
  },

  {
    path: 'users',
    loadChildren: () => import('src/app/modules/users/users.module').then((m => m.UsersModule))
  },

  {
    path: 'dashboard',
    loadChildren: () => import('src/app/modules/dashboard/dashboard.module').then((m => m.DashboardModule))
  },

  {
    path: 'hospitals',
    loadChildren: () => import('src/app/modules/hospitals/hospitals.module').then((m => m.HospitalsModule))
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'users'
  }

];

@NgModule({
  imports:  [ RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  }) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
