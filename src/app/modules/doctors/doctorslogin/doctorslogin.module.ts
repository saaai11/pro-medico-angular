import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorsloginRoutingModule } from './doctorslogin-routing.module';
import { DoctorsloginComponent } from './doctorslogin.component';


@NgModule({
  declarations: [DoctorsloginComponent],
  imports: [
    CommonModule,
    DoctorsloginRoutingModule
  ]
})
export class DoctorsloginModule { }
