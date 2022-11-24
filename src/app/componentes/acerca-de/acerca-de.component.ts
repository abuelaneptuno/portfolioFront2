import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/Usuario';
import { APIserviceService } from 'src/app/servicios/apiservice.service';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  miPorfolio:any;
  usuario:Usuario = new Usuario();
  constructor(private datosPorfolio:PorfolioService, public apiservice: APIserviceService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.miPorfolio = data;
    });
    this.apiservice.getUsuario().subscribe(dato => {(
      this.usuario = dato)
      });
  }
}