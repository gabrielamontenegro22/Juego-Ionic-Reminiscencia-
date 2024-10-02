import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Casa1Page } from './casa1.page';

const routes: Routes = [
  {
    path: '',
    component: Casa1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Casa1PageRoutingModule {}
