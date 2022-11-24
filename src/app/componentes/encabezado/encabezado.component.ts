import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { APIserviceService } from 'src/app/servicios/apiservice.service';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  miPorfolio:any;
  datos:any;
  url: string = 'https://portfolio-cuaranta.herokuapp.com/usuarios/1'
  constructor(private datosPorfolio:PorfolioService, private http: HttpClient) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPorfolio = data;
    });
    this.http.get<any>(this.url).subscribe(data => {this.datos = data});
    console.log(this.datos);
  }

}
