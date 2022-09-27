export class Usuarios{
  login: string;
  senha: string;
  cpf: string;
  nome: string;
  foto: string;
  idade: string;
  endereco: string;
  id: number;


  constructor(login: string, senha: string, cpf: string, nome: string, foto: string, idade: string, endereco: string, id: number){
    this.login = login;
    this.senha = senha;
    this.cpf = cpf;
    this.nome = nome;
    this.foto = foto;
    this.idade = idade;
    this.endereco = endereco;
    this.id = id;
  }

  
}
