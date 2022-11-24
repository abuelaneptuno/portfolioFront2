import { Component } from '@angular/core';
import { APIserviceService } from './servicios/apiservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App Angular';
  public usuario: any

  constructor(private apiService: APIserviceService){
    this.apiService.getUsuario().subscribe((resp: any) => {
      console.log("esto:" + resp)
    })
  }
}
