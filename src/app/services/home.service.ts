import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Usuarios} from '../models/usuario';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  endpoint = 'http://localhost:3000/usuarios';
  constructor(public http: HttpClient) { }

  
  public getUsuarios(): Observable<Usuarios[]>{
    return this.http.get<Usuarios[]>(this.endpoint);
  }
  public addUsuario(u: Usuarios): Observable<any>{
    const httpOptions = {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      headers: new HttpHeaders({'Content-Type': 'db/json'})
    };
    return this.http.post(this.endpoint, JSON.stringify(u), httpOptions);
  }
}
