import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BotonesmPage } from './botonesm.page';

const routes: Routes = [
  {
    path: '',
    component: BotonesmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BotonesmPageRoutingModule {}
