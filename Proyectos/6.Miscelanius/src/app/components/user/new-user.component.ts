import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styles: []
})
export class NewUserComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.parent.params.subscribe( (params) => {
      console.log('Ruta hija');
      console.log(params);
    });
  }

  ngOnInit() {
  }

}
