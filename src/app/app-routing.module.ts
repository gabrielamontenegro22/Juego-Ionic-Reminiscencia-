import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'salas',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'componente',
    loadChildren: () => import('./carpeta/componente/componente.module').then( m => m.ComponentePageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'elige-rol',
    loadChildren: () => import('./elige-rol/elige-rol.module').then( m => m.EligeRolPageModule)
  },
  {
    path: 'salas',
    loadChildren: () => import('./salas/salas.module').then( m => m.SalasPageModule)
  },  {
    path: 'captura-foto',
    loadChildren: () => import('./captura-foto/captura-foto.module').then( m => m.CapturaFotoPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
