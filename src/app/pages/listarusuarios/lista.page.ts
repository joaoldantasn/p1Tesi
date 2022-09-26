import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { HomeService } from '../../home/home.service';
import { Usuarios } from '../../home/usuarios';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class  listaPage  {

  usuarios = new Array<Usuarios>();
  constructor(private service: HomeService, private alertController: AlertController, private rota: Router) {
    this.service.getUsuarios().subscribe(response => (this.usuarios = response));

  }
  
  
;


}