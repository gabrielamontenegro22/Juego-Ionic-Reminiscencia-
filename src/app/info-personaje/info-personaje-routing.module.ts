import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoPersonajePage } from './info-personaje.page';

const routes: Routes = [
  {
    path: '',
    component: InfoPersonajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoPersonajePageRoutingModule {}
