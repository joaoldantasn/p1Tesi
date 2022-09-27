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
    loadChildren: () => import('./login/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'lista',
    loadChildren: () => import('./pages/listarusuarios/lista.module').then( m => m.listaPageModule)
  },
  {
    path: 'listar-filmes/criar-filme',
    loadChildren: () => import('./pages/criar-filmes/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'listar-filmes',
    loadChildren: () => import('./pages/listar-filmes/listar-filmes.module').then( m => m.ListarFilmesPageModule)
  },
  {
    path: 'editar-filme/:id',
    loadChildren: () => import('./pages/editar-filme/editar-filme.module').then( m => m.EditarFilmePageModule)
  }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
