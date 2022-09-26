import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { listaPageRoutingModule } from './lista-routing.module';

import { listaPage } from './lista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    listaPageRoutingModule
  ],
  declarations: [listaPage]
})
export class listaPageModule {}
