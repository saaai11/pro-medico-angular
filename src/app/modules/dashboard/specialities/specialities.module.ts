import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecialitiesRoutingModule } from './specialities-routing.module';
import { SpecialitiesComponent } from './specialities.component';


@NgModule({
  declarations: [SpecialitiesComponent],
  imports: [
    CommonModule,
    SpecialitiesRoutingModule
  ]
})
export class SpecialitiesModule { }
