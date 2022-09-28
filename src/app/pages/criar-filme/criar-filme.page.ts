import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilmesService } from 'src/app/services/filmes.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-criar-filme',
  templateUrl: './criar-filme.page.html',
  styleUrls: ['./criar-filme.page.scss'],
})
export class CriarFilmePage implements OnInit {



  public formFilmes: FormGroup;

	constructor(
		private formBuilder: FormBuilder, private service: FilmesService, private router: Router, private alertController: AlertController
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
		this.service.addFilme(this.formFilmes.value).subscribe(()=>{
			this.usuarioValido()
		});

    this.router.navigate(['/listar-filmes']).then(() => {
    });;
  }



  async usuarioValido(): Promise<void>{
	const alert = await this.alertController.create({
		subHeader: `Operacao realizada com sucesso!`,
		buttons: ['Continuar']
	});
	await alert.present();
   }
}
