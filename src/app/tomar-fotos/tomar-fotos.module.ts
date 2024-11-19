import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TomarFotosPageRoutingModule } from './tomar-fotos-routing.module';

import { TomarFotosPage } from './tomar-fotos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TomarFotosPageRoutingModule
  ],
  declarations: [TomarFotosPage]
})
export class TomarFotosPageModule {}
