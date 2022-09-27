import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Filmes } from 'src/app/models/filmes';
import { FilmesService } from 'src/app/services/filmes.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {



  public formFilmes: FormGroup;

	constructor(
		private formBuilder: FormBuilder, private service: FilmesService
	) {
		this.formFilmes = this.formBuilder.group({
			titulo: [null, Validators.compose([Validators.required, Validators.minLength(7)])],
			lancamento: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
			sinopse: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
			foto: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
			genero: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
			classificacao: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
			arrecadacao: [null, Validators.compose([Validators.required, Validators.minLength(3)])],

		});

	}
    ngOnInit(): void {

    }
	criarFilme(){
		this.service.addFilme(this.formFilmes.value).subscribe();
  }
}
