import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FincaRoutingModule } from './finca-routing.module';

import { FincaComponent } from './finca/finca.component';
import { LotesComponent } from './lotes/lotes.component';


@NgModule({
  declarations: [
    LotesComponent,
    FincaComponent
  ],
  imports: [
    CommonModule,
    FincaRoutingModule
  ]
})
export class FincaModule { }
