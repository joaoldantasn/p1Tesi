import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomeService } from 'src/app/home/home.service';
import { Usuarios } from 'src/app/home/usuario';
@Component({
  selector: 'app-criarusuario',
  templateUrl: './criarusuario.page.html',
  styleUrls: ['./criarusuario.page.scss'],
})
export class CriarusuarioPage implements OnInit {


  usuarioSaved : Usuarios = {
	login: '',
	senha: '',
	cpf: '',
	nome: '',
	foto: '',
	idade: '',
	endereco: '',
	id: 4

 }


  public formLogin: FormGroup;

	constructor(
		private formBuilder: FormBuilder, private service: HomeService
	) {
		this.formLogin = this.formBuilder.group({
			login: [null, Validators.compose([Validators.required, Validators.minLength(7)])],
			senha: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
			cpf: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
			foto: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
			idade: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
			endereco: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
			nome: [null, Validators.compose([Validators.required, Validators.minLength(3)])],

		});

	}

	criarUsuario(){
		console.log(this.usuarioSaved)
		this.service.addUsuario(this.usuarioSaved).subscribe(console.log)
	}



  ngOnInit() {
  }

}
