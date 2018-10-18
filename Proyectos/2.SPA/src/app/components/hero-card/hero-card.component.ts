import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {
  
  @Input() heroe:Heroe;

  @Output() heroeSeleccionado:EventEmitter<number>;

  constructor( private _router:Router) {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verHeroe(){
    // this.heroeSeleccionado.emit(this.index);
    this._router.navigate(['/heroe',this.heroe.index]);
  }

}
