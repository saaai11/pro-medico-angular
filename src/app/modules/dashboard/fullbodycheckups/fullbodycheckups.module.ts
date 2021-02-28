import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullbodycheckupsRoutingModule } from './fullbodycheckups-routing.module';
import { FullbodycheckupsComponent } from './fullbodycheckups.component';


@NgModule({
  declarations: [FullbodycheckupsComponent],
  imports: [
    CommonModule,
    FullbodycheckupsRoutingModule
  ]
})
export class FullbodycheckupsModule { }
