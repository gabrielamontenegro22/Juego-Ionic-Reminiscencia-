import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarraVidaPageRoutingModule } from './barra-vida-routing.module';

import { BarraVidaPage } from './barra-vida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarraVidaPageRoutingModule
  ],
  declarations: [BarraVidaPage]
})
export class BarraVidaPageModule {}
