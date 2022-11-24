import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import {enableProdMode} from '@angular/core';
import { Digimon } from '../model/digimon';


@Injectable({
  providedIn: 'root'
})
export class APIserviceService {
_url = "http://portfolio-cuaranta.herokuapp.com/usuarios/11";
private usuario:Usuario = new Usuario();
  constructor(private http: HttpClient) { 
    
  }

  public getUsuario(): Observable<Usuario> {
    enableProdMode();
    console.log(this.http.get<Usuario>(this._url))
    let header = new HttpHeaders().set('Type-content', 'aplication/json')
    return this.http.get<Usuario>(this._url, {headers: header});
  }

  public getPersona(): Observable<Usuario>{
    console.log("esto" + this.http.get(this._url));
    return this.http.get<Usuario>(this._url);
  }
}
