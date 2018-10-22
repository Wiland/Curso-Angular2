import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  term: string;
  modelChanged: Subject<string> = new Subject<string>();
  artists: any[] = [];
  firstSearch: boolean;
  loading: boolean;

  constructor( private _spotifyService: SpotifyService ) {
    this.firstSearch = false;
    this.loading = false;

    this.modelChanged
      .pipe(debounceTime(300)) // wait 300ms after the last event before emitting last event
      .pipe(distinctUntilChanged()) // only emit if value is different from previous value
      .subscribe(() => {
        if (this.term !== '') {
          this.searchArtist();
        }
      });
  }

  ngOnInit() {}

  searchArtist() {
    this.loading = true;
    const artistsObservable = this._spotifyService.getArtists(this.term);

    artistsObservable.subscribe((data) => {
      this.artists = data;
      this.firstSearch = false;
      this.loading = false;
    });
  }

  search() {
    this.modelChanged.next(this.term);
  }

}
