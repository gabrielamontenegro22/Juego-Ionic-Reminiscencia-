import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BotonesmPageRoutingModule } from './botonesm-routing.module';

import { BotonesmPage } from './botonesm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BotonesmPageRoutingModule,
    CommonModule, FormsModule
  ],
  declarations: [BotonesmPage]
})
export class BotonesmPageModule { }
