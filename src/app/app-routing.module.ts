import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'registro-usuario',
    loadChildren: () => import('./pages/registro-usuario/registro-usuario.module').then( m => m.RegistroUsuarioPageModule)
  },
  {
    path: 'registro-egresos',
    loadChildren: () => import('./pages/registro-egresos/registro-egresos.module').then( m => m.RegistroEgresosPageModule)
  },
  {
    path: 'listar-usuario',
    loadChildren: () => import('./pages/listar-usuario/listar-usuario.module').then( m => m.ListarUsuarioPageModule)
  },
  {
    path: 'listar-egresos',
    loadChildren: () => import('./pages/listar-egresos/listar-egresos.module').then( m => m.ListarEgresosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
