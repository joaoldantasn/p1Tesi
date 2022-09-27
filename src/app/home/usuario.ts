export class Usuario{
  login: string;
  senha: string;
  cpf: string;
  nome: string;
  foto: string;
  idade: string;
  endereco: string;

  constructor(login: string, senha: string, cpf: string, nome: string, foto: string, idade: string, endereco: string){
    this.login = login;
    this.senha = senha;
    this.cpf = cpf;
    this.nome = nome;
    this.foto = foto;
    this.idade = idade;
    this.endereco = endereco;
  }
}
