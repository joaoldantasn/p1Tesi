import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Filme } from '../models/Filme';
@Injectable({
  providedIn: 'root'
})
export class FilmesService {
  endpoint = 'http://localhost:3000/filmes';
  constructor(public http: HttpClient) { }


  public getFilmes(): Observable<Filme[]>{
    return this.http.get<Filme[]>(this.endpoint);
  }
  public addFilme(filme: Filme): Observable<any>{
    const httpOptions = {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    console.log(filme);
    return this.http.post(this.endpoint, JSON.stringify(filme), httpOptions);
  }

  public remove(id: number): Observable<any>{
    return this.http.delete(`${this.endpoint}/${id}`);
  }
}
