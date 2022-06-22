import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NuevaSesionGuard } from './guardianes/nueva-sesion.guard';
import { SesionAbiertaGuard } from './guardianes/sesion-abierta.guard';

const routes: Routes = [
  {
    path: 'sesion',
    pathMatch: 'full',
    loadChildren: () => import('./sesion/sesion.module').then(m => m.SesionModule),
    canActivate: [NuevaSesionGuard]
  },
  {
    path: 'caficultor',
    loadChildren: () => import('./tablero-caficultor/tablero-caficultor.module').then(m => m.TableroCaficultorModule),
    canActivate: [SesionAbiertaGuard]
  },
  {
    path: '',
    component: AppComponent,
    canActivate: [SesionAbiertaGuard],
  },
  { path: '**', redirectTo: 'sesion' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
