import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoPersonajePageRoutingModule } from './info-personaje-routing.module';

import { InfoPersonajePage } from './info-personaje.page';
import { Prueba2Component } from '../prueba2/prueba2.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoPersonajePageRoutingModule,
    Prueba2Component
  ],
  declarations: [InfoPersonajePage]
})
export class InfoPersonajePageModule {}







