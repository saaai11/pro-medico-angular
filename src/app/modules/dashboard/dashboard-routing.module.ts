import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    component: DashboardComponent
  },

  {
    path : 'specialities',
    loadChildren: () => import('src/app/modules/dashboard/specialities/specialities.module').then((m => m.SpecialitiesModule))
  },

  {
    path : 'hospitals',
    loadChildren: () => import('src/app/modules/dashboard/hospitals/hospitals.module').then((m => m.HospitalsModule))
  },

  {
    path : 'fullbodycheckups',
    loadChildren: () => import('src/app/modules/dashboard/fullbodycheckups/fullbodycheckups.module').then((m => m.FullbodycheckupsModule))
  },

  {
    path : 'coronavirus',
    loadChildren: () => import('src/app/modules/dashboard/coronavirus/coronavirus.module').then((m => m.CoronavirusModule))
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
