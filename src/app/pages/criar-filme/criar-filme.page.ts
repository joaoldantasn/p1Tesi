import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilmesService } from 'src/app/services/filmes.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-criar-filme',
  templateUrl: './criar-filme.page.html',
  styleUrls: ['./criar-filme.page.scss'],
})
export class CriarFilmePage implements OnInit {



  public formFilmes: FormGroup;

	constructor(
		private formBuilder: FormBuilder, private service: FilmesService, private router: Router
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
    alert('Filme criado com sucesso');
    this.router.navigate(['/listar-filmes']).then(() => {
      window.location.reload();
    });;
  }
}
