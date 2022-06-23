import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FincasComponent } from './fincas/fincas.component';
import { TableroCaficultorComponent } from './tablero-caficultor.component';

const routes: Routes = [
  {
    path: '',
    component: TableroCaficultorComponent,
    children: [
      {
        path: 'fincas',
        pathMatch: 'full',
        component: FincasComponent,
      },
      {
        path: 'finca/:idFinca',
        loadChildren: () => import('./finca/finca.module').then(m => m.FincaModule),
      },
      {
        path: '**',
        redirectTo: 'fincas'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableroCaficultorRoutingModule { }
