import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Filmes } from 'src/app/models/filmes';
import { FilmesService } from 'src/app/services/filmes.service';

@Component({
  selector: 'app-listar-filmes',
  templateUrl: './listar-filmes.page.html',
  styleUrls: ['./listar-filmes.page.scss'],
})
export class ListarFilmesPage {

  filmes = new Array<Filmes>();
  constructor(private service: FilmesService, private alertController: AlertController, private rota: Router) {
    this.service.getFilmes().subscribe(response => (this.filmes = response));
  };

}
