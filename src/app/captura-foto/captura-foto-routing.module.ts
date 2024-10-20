import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CapturaFotoPage } from './captura-foto.page';

const routes: Routes = [
  {
    path: '',
    component: CapturaFotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapturaFotoPageRoutingModule {}
