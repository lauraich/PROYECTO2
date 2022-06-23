import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableroCaficultorRoutingModule } from './tablero-caficultor-routing.module';
import { TableroCaficultorComponent } from './tablero-caficultor.component';
import { FincasComponent } from './fincas/fincas.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TableroCaficultorComponent,
    FincasComponent,
  ],
  imports: [
    CommonModule,
    TableroCaficultorRoutingModule,
    ReactiveFormsModule
  ]
})
export class TableroCaficultorModule { }
