import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoPersonajePageRoutingModule } from './info-personaje-routing.module';

import { InfoPersonajePage } from './info-personaje.page';

import { NombreComponenteComponent } from '../nombre-componente/nombre-componente.component';
import { ListFriendComponent } from '../list-friend/list-friend.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoPersonajePageRoutingModule,
    NombreComponenteComponent,
    ListFriendComponent,
        
  ],
  declarations: [InfoPersonajePage]
})
export class InfoPersonajePageModule {}







