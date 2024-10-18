import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EligeRolPageRoutingModule } from './elige-rol-routing.module';

import { EligeRolPage } from './elige-rol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EligeRolPageRoutingModule
  ],
  declarations: [EligeRolPage]
})
export class EligeRolPageModule {}
