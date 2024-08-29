import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JuegoVerdaderoPage } from './juego-verdadero.page';

const routes: Routes = [
  {
    path: '',
    component: JuegoVerdaderoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuegoVerdaderoPageRoutingModule {}
