import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/home/usuario';

@Component({
  selector: 'app-criarusuario',
  templateUrl: './criarusuario.page.html',
  styleUrls: ['./criarusuario.page.scss'],
})
export class CriarusuarioPage implements OnInit {


 public usuarioSaved : Usuario;

  public formLogin: FormGroup;

	constructor(
		private formBuilder: FormBuilder
	) {
		this.formLogin = this.formBuilder.group({
			login: [null, Validators.compose([Validators.required, Validators.email])],
			senha: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
			cpf: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
			foto: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
			idade: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
			endereco: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
			nome: [null, Validators.compose([Validators.required, Validators.minLength(3)])],

		});

	}




  ngOnInit() {
  }

}
