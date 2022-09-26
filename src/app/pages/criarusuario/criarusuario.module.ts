import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarusuarioPageRoutingModule } from './criarusuario-routing.module';

import { CriarusuarioPage } from './criarusuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarusuarioPageRoutingModule
  ],
  declarations: [CriarusuarioPage]
})
export class CriarusuarioPageModule {}
