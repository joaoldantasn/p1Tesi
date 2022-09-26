import { Component } from '@angular/core';
import { Router, RouterState } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { findItemLabel } from '@ionic/core/dist/types/utils/helpers';
import { HomeService } from './home.service';
import { Produtos } from './produtos';
import { Usuarios } from './usuarios';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  myapp = 'Myapp';
  usuarios = new Array<Usuarios>();
  login = '';
  senha = '';
  constructor(service: HomeService, private alertController: AlertController, private rota: Router) {
    service.getUsuarios().subscribe(response => (this.usuarios = response));
  };

  verificaSeTem(){
    const valido = this.usuarios.find(user =>user.login === this.login);
    console.log(valido);
    if(typeof valido === 'undefined'){
      this.usuarioValido('Erro', 'Usuário Inválido', '', 'OK');
    } else if(valido.senha !== this.senha){
      this.usuarioValido('Erro', 'Senha Inválida', '', 'OK');
    }else{
      this.rota.navigateByUrl('perfil');
    }
  };
   async usuarioValido(headeR: string, subHeadeR: string, messagE: string, buttonS: string): Promise<void>{
   const alert = await this.alertController.create({
     header: headeR,
     subHeader: subHeadeR,
     message: messagE,
     buttons: [buttonS]
   });
   await alert.present();
  }


}


