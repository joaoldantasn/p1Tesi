import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { HomeService } from '../home.service';
import { Usuarios } from '../usuarios';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage  {

  usuarios = new Array<Usuarios>();
  constructor(private service: HomeService, private alertController: AlertController, private rota: Router) {
    this.service.getUsuarios().subscribe(response => (this.usuarios = response));

  }
  
  
;


}
