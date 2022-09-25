import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produtos } from './produtos';
import {Usuarios} from './usuarios';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  endpoint = 'http://localhost:3000/usuarios';
  constructor(public http: HttpClient) { }

  public getProdutos(): Observable<Produtos[]>{
    return this.http.get<Produtos[]>(this.endpoint);
  }
  public getUsuarios(): Observable<Usuarios[]>{
    return this.http.get<Usuarios[]>(this.endpoint);
  }
}
