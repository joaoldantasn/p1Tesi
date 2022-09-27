import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Usuario } from 'src/app/models/Usuario';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})

// eslint-disable-next-line @typescript-eslint/naming-convention
export class  listaPage  {

  usuarios = new Array<Usuario>();
  constructor(private service: HomeService, private alertController: AlertController, private rota: Router) {
    this.service.getUsuarios().subscribe(response => (this.usuarios = response));
  };

}
