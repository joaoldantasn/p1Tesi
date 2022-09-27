import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeService } from 'src/app/home/home.service';
import { Usuarios } from 'src/app/home/usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {


  usuarioSaved: Usuarios = {
	login: '',
	senha: '',
	cpf: '',
	nome: '',
	foto: '',
	idade: '',
	endereco: '',
	id: 0
 };


  public formLogin: FormGroup;

	constructor(
		private formBuilder: FormBuilder, private service: HomeService
	) {
		this.formLogin = this.formBuilder.group({
			titulo: [null, Validators.compose([Validators.required, Validators.minLength(7)])],
			lancamento: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
			sinopse: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
			foto: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
			genero: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
			classificacao: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
			arrecadacao: [null, Validators.compose([Validators.required, Validators.minLength(3)])],

		});

	}

	criarUsuario(){
		console.log(this.formLogin.value.titulo)
		
	}



  ngOnInit() {
  }

}
