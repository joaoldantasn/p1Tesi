import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Usuarios } from 'src/app/home/usuario';
import { HomeService } from '../../home/home.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})

// eslint-disable-next-line @typescript-eslint/naming-convention
export class  listaPage  {

  usuarios = new Array<Usuarios>();
  constructor(private service: HomeService, private alertController: AlertController, private rota: Router) {
    this.service.getUsuarios().subscribe(response => (this.usuarios = response));
  };

}
