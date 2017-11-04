import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Wilmer';
  nombreRaro = 'eL uSuarIo EsciBe uN pOCo raRO';
  arreglo = [1,2,3,4,5,6,7];
  PI = Math.PI;
  perc = 0.3556;

  salario = 1500000.5;

  heroe = {
    clave: 'Wolverine',
    nombre: 'Logan',
    poder: 'Adamantium'
  };

  valorDePromesa = new Promise((resolve,reject)=>{
    setTimeout( ()=> resolve('Acabó'), 3000 );
  });

  fecha = new Date();

  video = "Rqoq5oMOTaU";
}
