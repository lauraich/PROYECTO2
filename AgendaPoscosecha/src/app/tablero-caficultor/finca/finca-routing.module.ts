import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FincaComponent } from './finca/finca.component';

const routes: Routes = [
  {
    path: '',
    component: FincaComponent,
    pathMatch: 'full'
  },
  {
    path: 'lote/:idLote',
    loadChildren: () => import('./lote/lote.module').then(m => m.LoteModule),
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FincaRoutingModule { }
