import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Filme } from 'src/app/models/Filme';
import { FilmesService } from 'src/app/services/filmes.service';

@Component({
  selector: 'app-editar-filme',
  templateUrl: './editar-filme.page.html',
  styleUrls: ['./editar-filme.page.scss'],
})
export class EditarFilmePage  implements OnInit {



  public formFilmes: FormGroup;
  public userId: number;
  public filme: Filme;


	constructor(private route:ActivatedRoute,
		private formBuilder: FormBuilder, private service: FilmesService, private router: Router, private alertController: AlertController
	) {
    this.userId = this.route.snapshot.params["id"];
    this.service.getFilme(2).subscribe(response =>this.filme =response)
    console.log(this.filme)

		this.formFilmes = this.formBuilder.group({
			titulo: [this.filme.titulo, Validators.compose([Validators.required, Validators.minLength(7)])],
			lancamento: [this.filme.lancamento, Validators.compose([Validators.required, Validators.min(41900)])],
			sinopse: [this.filme.sinopse, Validators.compose([Validators.required, Validators.minLength(30)])],
			foto: [this.filme.foto, Validators.compose([Validators.required, Validators.minLength(10)])],
			genero: [this.filme.genero, Validators.compose([Validators.required, Validators.minLength(3)])],
			classificacao: [this.filme.classificacao, Validators.compose([Validators.required, Validators.minLength(3)])],
			arrecadacao: [this.filme.arrecadacao, Validators.compose([Validators.required, Validators.minLength(3)])],

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
