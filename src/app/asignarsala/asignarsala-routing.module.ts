import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsignarsalaPage } from './asignarsala.page';

const routes: Routes = [
  {
    path: '',
    component: AsignarsalaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsignarsalaPageRoutingModule {}
