import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {
  @Input() id: string;
  artist: any;
  tracks: any[];
  loadingArtist: boolean;
  loadingTracks: boolean;

  constructor( private activatedRoute: ActivatedRoute, private _spotifyService: SpotifyService ) {
    this.loadingArtist = false;
    this.loadingTracks = false;
  }

  ngOnInit() {
    this.activatedRoute.params
      .pipe( map(parametros => parametros['id']) )
      .subscribe( id => {
        this.loadingArtist = true;
        this._spotifyService.getArtist(id)
          .subscribe( data => { this.artist = data; this.loadingArtist = false; } );

        this.loadingTracks = false;
        this._spotifyService.getArtisTopTracks(id)
          .subscribe( data => { this.tracks = data; this.loadingTracks = false; } );
      });
  }

}
