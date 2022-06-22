import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FincaRoutingModule } from './finca-routing.module';
import { FincaComponent } from './finca.component';
import { LotesComponent } from './lotes/lotes.component';


@NgModule({
  declarations: [
    FincaComponent,
    LotesComponent
  ],
  imports: [
    CommonModule,
    FincaRoutingModule
  ]
})
export class FincaModule { }
