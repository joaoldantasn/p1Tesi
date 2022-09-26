import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-criarusuario',
  templateUrl: './criarusuario.page.html',
  styleUrls: ['./criarusuario.page.scss'],
})
export class CriarusuarioPage implements OnInit {

  public formLogin: FormGroup;

	constructor(
		private formBuilder: FormBuilder
	) {
		this.formLogin = this.formBuilder.group({
			login: [null, Validators.compose([Validators.email])],
			senha: [null, Validators.compose([Validators.minLength(3)])],
			cpf: [null, Validators.compose([Validators.minLength(3)])],
			foto: [null, Validators.compose([Validators.minLength(3)])],
			idade: [null, Validators.compose([Validators.minLength(3)])],
			endereco: [null, Validators.compose([Validators.minLength(3)])],
			nome: [null, Validators.compose([Validators.minLength(3)])],

		});

	}




  ngOnInit() {
  }

//   "login": "joao.lucas",
//   "senha": "123456",
//   "cpf": "12345678900",
//   "foto": "",
//   "idade": "21/03/2000",
//   "endereco": "Assis Chateubriand"
// },

}
