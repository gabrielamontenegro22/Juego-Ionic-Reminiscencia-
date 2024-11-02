import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentCrudPageRoutingModule } from './student-crud-routing.module';

import { StudentCrudPage } from './student-crud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentCrudPageRoutingModule
  ],
  declarations: [StudentCrudPage]
})
export class StudentCrudPageModule {}
