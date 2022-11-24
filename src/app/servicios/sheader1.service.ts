import { Injectable } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Sheader1Service {
  _url = "http://portfolio-cuaranta.herokuapp.com/usuarios/11";
  private usuario:Usuario = new Usuario();
  constructor(private http: HttpClient) { 
    
  }

  public getUsuario(): Observable<Usuario> {
    console.log(this.http.get<Usuario>(this._url))
    let header = new HttpHeaders().set('Type-content', 'aplication/json')
    return this.http.get<Usuario>(this._url, {headers: header});
  }
}
