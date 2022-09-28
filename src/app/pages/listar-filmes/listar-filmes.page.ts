import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Filme } from 'src/app/models/Filme';
import { FilmesService } from 'src/app/services/filmes.service';

@Component({
  selector: 'app-listar-filmes',
  templateUrl: './listar-filmes.page.html',
  styleUrls: ['./listar-filmes.page.scss'],
})
export class ListarFilmesPage implements OnInit{

  filmes = new Array<Filme>();
  constructor(private service: FilmesService, private alertController: AlertController, private rota: Router) {
  };

  ngOnInit(): void {
    this.service.getFilmes().subscribe(response => (this.filmes = response));
  }

  excluirFilme(id: number) {
      this.service.remove(id).subscribe(()=>{

        this.service.getFilmes().subscribe(response => (this.filmes = response));

        this.alertController.create({
          subHeader: `Operacao realizada com sucesso!`,
          buttons: [
            {
              text: 'Continuar',
              handler: () => {
              }
            }
          ]
        }).then(res => {
          res.present();
        });


      });
  
  }



 async showConfirm(id: number, titulo: string) {
    this.alertController.create({
      subHeader: `Você está prestes a apagar o filme: ${titulo}`,
      buttons: [
        {
          text: 'Confirmar',
          handler: () => {
            this.excluirFilme(id)
          }
        },
        {
          text: 'Cancelar',
          handler: () => {
          }
        }
      ]
    }).then(res => {
      res.present();
    });
  }
}
