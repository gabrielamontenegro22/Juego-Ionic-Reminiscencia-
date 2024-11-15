import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
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
    path: 'elige-rol',
    loadChildren: () => import('./elige-rol/elige-rol.module').then( m => m.EligeRolPageModule)
  },
  {
    path: 'salas',
    loadChildren: () => import('./salas/salas.module').then( m => m.SalasPageModule)
  },
  {
    path: 'captura-foto',
    loadChildren: () => import('./captura-foto/captura-foto.module').then( m => m.CapturaFotoPageModule)
  },
  {
    path: 'info-personaje',
    loadChildren: () => import('./info-personaje/info-personaje.module').then( m => m.InfoPersonajePageModule)
  },
  {
    path: 'prueba',
    loadChildren: () => import('./prueba/prueba.module').then( m => m.PruebaPageModule)
  },
  {
    path: 'amigos',
    loadChildren: () => import('./amigos/amigos.module').then( m => m.AmigosPageModule)
  },
  {
    path: 'barra-vida',
    loadChildren: () => import('./barra-vida/barra-vida.module').then( m => m.BarraVidaPageModule)
  },
  {
    path: 'ajuste',
    loadChildren: () => import('./ajuste/ajuste.module').then( m => m.AjustePageModule)
  },
  {
    path: 'gestion-sala',
    loadChildren: () => import('./gestion-sala/gestion-sala.module').then( m => m.GestionSalaPageModule)
  },
  {
    path: 'restablecer',
    loadChildren: () => import('./restablecer/restablecer.module').then( m => m.RestablecerPageModule)
  },
  {
    path: 'restablecer2',
    loadChildren: () => import('./restablecer2/restablecer2.module').then( m => m.Restablecer2PageModule)
  },  {
    path: 'habilidadesgeneral',
    loadChildren: () => import('./habilidadesgeneral/habilidadesgeneral.module').then( m => m.HabilidadesgeneralPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
