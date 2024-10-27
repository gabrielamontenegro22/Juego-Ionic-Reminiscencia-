import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarraVidaPage } from './barra-vida.page';

const routes: Routes = [
  {
    path: '',
    component: BarraVidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarraVidaPageRoutingModule {}
