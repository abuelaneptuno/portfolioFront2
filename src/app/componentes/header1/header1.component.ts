import { Component, OnInit } from '@angular/core';
import { Sheader1Service } from 'src/app/servicios/sheader1.service';
import { Usuario } from 'src/app/model/Usuario';

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.css']
})
export class Header1Component implements OnInit {
  usuario:Usuario = new Usuario();

  constructor(public sheader: Sheader1Service) { }

  ngOnInit(): void {
    this.sheader.getUsuario().subscribe(dato => {(this.usuario = dato)});
    console.log(this.usuario.github)
  }

}
