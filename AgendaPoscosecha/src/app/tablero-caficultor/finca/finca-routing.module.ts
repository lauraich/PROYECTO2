import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControladorComponent } from './controlador.component';
import { FincaComponent } from './finca/finca.component';

const routes: Routes = [{
  path: '',
  component: ControladorComponent,
  children: [
    {
      path: 'lote/:idLote',
      loadChildren: () => import('./lote/lote.module').then(m => m.LoteModule),
    },
    {
      path: '',
      pathMatch: 'full',
      component: FincaComponent
    },
    {
      path: '**',
      redirectTo: '',
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FincaRoutingModule { }
