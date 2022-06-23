import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistorialComponent } from './historial/historial.component';
import { LoteComponent } from './lote.component';
import { RecogidasComponent } from './recogidas/recogidas.component';

const routes: Routes = [
  {
    path: '',
    component: LoteComponent,
    children: [
      {
        path: 'r',
        pathMatch: 'full',
        component: RecogidasComponent,
      },
      {
        path: 'h',
        pathMatch: 'full',
        component: HistorialComponent,
      },
      {
        path: '**',
        redirectTo: 'r',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoteRoutingModule { }
