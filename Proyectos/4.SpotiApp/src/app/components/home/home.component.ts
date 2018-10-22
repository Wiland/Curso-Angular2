import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  albums: any[] = [];
  loading: boolean;

  constructor(private _spotify: SpotifyService) {
    this.loading = false;
  }

  ngOnInit() {
    this.loading = true;
    this._spotify.getNewReleases().subscribe((data) => {
      this.albums = data;
      this.loading = false;
    });
  }

}
