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
			'email': [null, Validators.compose([Validators.email])],
			'password': [null, Validators.compose([Validators.minLength(3)])]
		});

	}
  ngOnInit() {
  }

}
