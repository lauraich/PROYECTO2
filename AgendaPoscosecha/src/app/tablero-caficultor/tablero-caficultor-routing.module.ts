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
        path: 'finca/:idFinca',
        pathMatch: 'full',
        loadChildren: () => import('./finca/finca.module').then(m => m.FincaModule),
      },
      {
        path: 'fincas',
        pathMatch: 'full',
        component: FincasComponent,
      },
      {
        path: '**',
        pathMatch: 'full',
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
