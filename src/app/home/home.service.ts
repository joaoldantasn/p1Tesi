import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produtos } from './produtos';
import {Usuario} from './usuario';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  endpoint = 'http://localhost:3000/usuarios';
  constructor(public http: HttpClient) { }

  public getProdutos(): Observable<Produtos[]>{
    return this.http.get<Produtos[]>(this.endpoint);
  }
  public getUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.endpoint);
  }
  addUsuario(u: Usuario): Observable<any>{
    const httpOptions = {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      headers: new HttpHeaders({'Content-Type': 'db/json'})
    };
    return this.http.post(this.endpoint, JSON.stringify(u), httpOptions);
  }
}
