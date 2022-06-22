import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableroCaficultorRoutingModule } from './tablero-caficultor-routing.module';
import { TableroCaficultorComponent } from './tablero-caficultor.component';
import { FincasComponent } from './fincas/fincas.component';


@NgModule({
  declarations: [
    TableroCaficultorComponent,
    FincasComponent,
  ],
  imports: [
    CommonModule,
    TableroCaficultorRoutingModule
  ]
})
export class TableroCaficultorModule { }
