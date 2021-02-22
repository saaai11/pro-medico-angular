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
