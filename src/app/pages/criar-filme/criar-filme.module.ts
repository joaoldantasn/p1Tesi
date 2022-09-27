import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarFilmeRoutingModule } from './criar-filme-routing.module';

import { CriarFilmePage } from './criar-filme.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CriarFilmeRoutingModule
  ],
  declarations: [CriarFilmePage]
})
export class CriarFilmeModule {}
