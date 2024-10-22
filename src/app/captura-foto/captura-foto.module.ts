import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapturaFotoPageRoutingModule } from './captura-foto-routing.module';

import { CapturaFotoPage } from './captura-foto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CapturaFotoPageRoutingModule
  ],
  declarations: [CapturaFotoPage]
})
export class CapturaFotoPageModule {}
