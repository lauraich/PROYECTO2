import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoteRoutingModule } from './lote-routing.module';
import { LoteComponent } from './lote.component';
import { RecogidasComponent } from './recogidas/recogidas.component';
import { HistorialComponent } from './historial/historial.component';


@NgModule({
  declarations: [
    LoteComponent,
    RecogidasComponent,
    HistorialComponent
  ],
  imports: [
    CommonModule,
    LoteRoutingModule
  ]
})
export class LoteModule { }
