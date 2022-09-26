import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'lista',
    loadChildren: () => import('./pages/listarusuarios/lista.module').then( m => m.listaPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/meu-perfil/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'criarusuario', // vamso precisar passar o username na url
    loadChildren: () => import('./pages/criarusuario/criarusuario.module').then( m => m.CriarusuarioPageModule)
  },
  {
    path: 'editarusuario',
    loadChildren: () => import('./pages/editarusuario/editarusuario.module').then( m => m.EditarusuarioPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
