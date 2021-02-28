import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoronavirusRoutingModule } from './coronavirus-routing.module';
import { CoronavirusComponent } from './coronavirus.component';


@NgModule({
  declarations: [CoronavirusComponent],
  imports: [
    CommonModule,
    CoronavirusRoutingModule
  ]
})
export class CoronavirusModule { }
