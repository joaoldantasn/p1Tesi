import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { listaPage } from '../pages/listarusuarios/lista.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'menu',
    component: listaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
