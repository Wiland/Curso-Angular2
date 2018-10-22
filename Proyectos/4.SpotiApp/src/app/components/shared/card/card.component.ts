import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {

  @Input() items: any[] = [];

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  itemDetails(item) {
    const id = item.id;
    switch (item.type) {
      case 'artist':
        this._router.navigate([ '/artist', id ]);
        break;
    }
  }

}
