import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HabilidadesgeneralPageRoutingModule } from './habilidadesgeneral-routing.module';

import { HabilidadesgeneralPage } from './habilidadesgeneral.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HabilidadesgeneralPageRoutingModule
  ],
  declarations: [HabilidadesgeneralPage]
})
export class HabilidadesgeneralPageModule {}
