import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Casa1PageRoutingModule } from './casa1-routing.module';

import { Casa1Page } from './casa1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Casa1PageRoutingModule
  ],
  declarations: [Casa1Page]
})
export class Casa1PageModule {}
