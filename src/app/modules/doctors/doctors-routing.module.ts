import { DoctorsComponent } from './doctors.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    component: DoctorsComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
    exports: [RouterModule]
})
export class DoctorsRoutingModule { }
