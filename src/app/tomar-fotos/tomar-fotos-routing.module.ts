import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TomarFotosPage } from './tomar-fotos.page';

const routes: Routes = [
  {
    path: '',
    component: TomarFotosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TomarFotosPageRoutingModule {}
