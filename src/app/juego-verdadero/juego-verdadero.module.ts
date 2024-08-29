import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JuegoVerdaderoPageRoutingModule } from './juego-verdadero-routing.module';

import { JuegoVerdaderoPage } from './juego-verdadero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JuegoVerdaderoPageRoutingModule
  ],
  declarations: [JuegoVerdaderoPage]
})
export class JuegoVerdaderoPageModule {}
