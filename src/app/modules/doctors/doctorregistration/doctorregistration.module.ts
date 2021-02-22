import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorregistrationRoutingModule } from './doctorregistration-routing.module';
import { DoctorregistrationComponent } from './doctorregistration.component';


@NgModule({
  declarations: [DoctorregistrationComponent],
  imports: [
    CommonModule,
    DoctorregistrationRoutingModule
  ]
})
export class DoctorregistrationModule { }
