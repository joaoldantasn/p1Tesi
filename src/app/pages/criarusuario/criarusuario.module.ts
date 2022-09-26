import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarusuarioPageRoutingModule } from './criarusuario-routing.module';

import { CriarusuarioPage } from './criarusuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FormBuilder,
    ReactiveFormsModule,
    IonicModule,
    CriarusuarioPageRoutingModule
  ],
  declarations: [CriarusuarioPage]
})
export class CriarusuarioPageModule {}
