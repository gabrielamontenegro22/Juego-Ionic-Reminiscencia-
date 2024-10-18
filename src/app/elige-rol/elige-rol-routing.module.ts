import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EligeRolPage } from './elige-rol.page';

const routes: Routes = [
  {
    path: '',
    component: EligeRolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EligeRolPageRoutingModule {}
