import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorsprofileRoutingModule } from './doctorsprofile-routing.module';
import { DoctorsprofileComponent } from './doctorsprofile.component';


@NgModule({
  declarations: [DoctorsprofileComponent],
  imports: [
    CommonModule,
    DoctorsprofileRoutingModule
  ]
})
export class DoctorsprofileModule { }
