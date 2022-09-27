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

  excluirFilme(id: number, titulo: string) {
    const toExclude = confirm('Deseja excluir o filme ' + titulo + ' ?');
    if(toExclude) {
      this.service.remove(id).subscribe(response => alert('Filme removido com sucesso!'));
      this.service.getFilmes().subscribe(response => (this.filmes = response));
    }
  }
}
