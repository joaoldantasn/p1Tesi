import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarusuarioPage } from './criarusuario.page';

const routes: Routes = [
  {
    path: '',
    component: CriarusuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriarusuarioPageRoutingModule {}
