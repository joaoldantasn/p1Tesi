import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Usuarios} from '../models/usuario';
import { Filmes } from '../models/filmes';
@Injectable({
  providedIn: 'root'
})
export class FilmesService {
  endpoint = 'http://localhost:3000/filmes';
  constructor(public http: HttpClient) { }

  
  public getFilmes(): Observable<Filmes[]>{
    return this.http.get<Filmes[]>(this.endpoint);
  }
  public addFilme(filme: Filmes): Observable<any>{
    const httpOptions = {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      headers: new HttpHeaders({'Content-Type': 'db/json'})
    };
    return this.http.post(this.endpoint, JSON.stringify(filme), httpOptions);
  }
}
