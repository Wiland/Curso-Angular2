import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: 'body.component.html'
})
export class BodyComponent {
  mostrar:boolean = false;
  peliculas:string[] = ["Mad Max","It","Superman","Batman"];
  frase:any = {
    mensaje: "Angular es muy sencillo",
    autor: "Anónimo"
  }
}
