import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoteRoutingModule } from './lote-routing.module';
import { LoteComponent } from './lote.component';
import { RecogidasComponent } from './recogidas/recogidas.component';
import { HistorialComponent } from './historial/historial.component';
import { PrimeNgModule } from 'src/app/compartido/prime-ng/prime-ng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AgregarRecogidaComponent } from './agregar-recogida/agregar-recogida.component';


@NgModule({
  declarations: [
    LoteComponent,
    RecogidasComponent,
    HistorialComponent,
    AgregarRecogidaComponent
  ],
  imports: [
    CommonModule,
    LoteRoutingModule,
    PrimeNgModule,
    ReactiveFormsModule,
  ]
})
export class LoteModule { }
