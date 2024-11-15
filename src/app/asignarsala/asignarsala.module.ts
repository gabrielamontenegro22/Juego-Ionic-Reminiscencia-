import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsignarsalaPageRoutingModule } from './asignarsala-routing.module';

import { AsignarsalaPage } from './asignarsala.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsignarsalaPageRoutingModule
  ],
  declarations: [AsignarsalaPage]
})
export class AsignarsalaPageModule {}
