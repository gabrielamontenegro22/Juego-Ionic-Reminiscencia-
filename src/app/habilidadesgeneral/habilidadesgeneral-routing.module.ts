import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HabilidadesgeneralPage } from './habilidadesgeneral.page';

const routes: Routes = [
  {
    path: '',
    component: HabilidadesgeneralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HabilidadesgeneralPageRoutingModule {}
