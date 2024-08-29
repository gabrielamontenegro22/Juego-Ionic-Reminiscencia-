import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
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
    path: 'foto',
    loadChildren: () => import('./foto/foto.module').then( m => m.FotoPageModule)
  },  {
    path: 'juego',
    loadChildren: () => import('./juego/juego.module').then( m => m.JuegoPageModule)
  },
  {
    path: 'juego-verdadero',
    loadChildren: () => import('./juego-verdadero/juego-verdadero.module').then( m => m.JuegoVerdaderoPageModule)
  },
  {
    path: 'detalle-personaje',
    loadChildren: () => import('./detalle-personaje/detalle-personaje.module').then( m => m.DetallePersonajePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
