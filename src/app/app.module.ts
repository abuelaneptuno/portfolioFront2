import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { FormacionComponent } from './componentes/formacion/formacion.component';
import { CompetenciasComponent } from './componentes/competencias/competencias.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { Header1Component } from './componentes/header1/header1.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    FormacionComponent,
    CompetenciasComponent,
    ProyectosComponent,
    AcercaDeComponent,
    FooterComponent,
    Header1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
