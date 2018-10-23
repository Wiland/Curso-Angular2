import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="fontSize">
      Hola mundo... esta es una etiqueta
    </p>

    <button class="btn btn-primary" (click)="increaseSize()">
      <i class="fa fa-plus"></i>
    </button>
    &nbsp;
    <button class="btn btn-primary" (click)="decreaseSize()">
      <i class="fa fa-minus"></i>
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  fontSize: number;

  constructor() {
    this.fontSize = 12;
  }

  ngOnInit() {
  }

  increaseSize() {
    this.fontSize++;
  }

  decreaseSize() {
    if (this.fontSize > 1) {
      this.fontSize--;
    }
  }

}
