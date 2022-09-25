import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { HomeService } from './home.service';
import { Produtos } from './produtos';
import { Usuarios } from './usuarios';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usuarios = new Array<Usuarios>();
  login = '';
  senha = '';
  constructor(service: HomeService, private alertController: AlertController) {
    service.getUsuarios().subscribe(response => (this.usuarios = response));
  }
   async usuarioValido(){
   const alert = await this.alertController.create({
     header: 'ERROR',
     subHeader: '',
     message: 'Usuário ou senhas incompatíveis',
     buttons: ['Ok']
   });
   await alert.present();
  }


}


