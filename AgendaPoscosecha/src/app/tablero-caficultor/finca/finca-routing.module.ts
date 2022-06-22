import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FincaComponent } from './finca.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: FincaComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FincaRoutingModule { }
