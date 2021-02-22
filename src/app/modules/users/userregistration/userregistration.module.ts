import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserregistrationRoutingModule } from './userregistration-routing.module';
import { UserregistrationComponent } from './userregistration.component';


@NgModule({
  declarations: [UserregistrationComponent],
  imports: [
    CommonModule,
    UserregistrationRoutingModule
  ]
})
export class UserregistrationModule { }
