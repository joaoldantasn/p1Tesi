import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Usuario } from '../models/Usuario';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  endpoint = 'http://localhost:3000/usuarios';
  constructor(public http: HttpClient) { }

  public getUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.endpoint);
  }

}
