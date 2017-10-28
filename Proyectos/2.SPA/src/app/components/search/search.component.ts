import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from "../../services/heroes.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  heroes:any = [];
  termino = "";

  constructor( private activatedRoute:ActivatedRoute, private _heroesService:HeroesService,
              private _router:Router) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      this.termino = params['termino'];
      this._router.navigate(['/search',params['termino']]);
    });
  }

}
