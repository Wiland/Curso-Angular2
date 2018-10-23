import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styles: []
})
export class NgClassComponent implements OnInit {
  alertClass: string;
  styleProperties: Object;
  loading: boolean;

  constructor() {
    this.alertClass = 'alert-primary';
    this.styleProperties = {
      danger: false
    };
    this.loading = false;
  }

  ngOnInit() {
  }

  run() {
    this.loading = true;
    setTimeout(() => this.loading = false, 3000);
  }

}
