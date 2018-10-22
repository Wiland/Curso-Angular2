import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, flatMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  baseUrl = 'https://api.spotify.com/v1/';
  tokenUrl = 'https://accounts.spotify.com/api/token';
  token = '';
  lastAccessTokenDate: Date;
  tokenNeedsRefresh: boolean;

  private CLIENT_ID = '17022ffe861f4b43bbf7d7aca7cee995';
  private CLIENT_SECRET = '1ab1cc4e6e21401781c8dd0b35821c48';
  private GRANT_TYPE = 'client_credentials';

  constructor( private http: HttpClient ) {
    this.tokenNeedsRefresh = true;
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${ query }`;

    return this.getToken()
        .pipe(flatMap((token: string) => {
          let headers = new HttpHeaders();
          headers = headers.append('Authorization', token );
          headers = headers.append('Accept', 'application/json' );

          return this.http.get( url, { headers } );
        })
      );
  }

  getToken(): any {
    if (this.tokenNeedsRefresh) {
      const data = new HttpParams()
        .set('client_id', this.CLIENT_ID)
        .set('client_secret', this.CLIENT_SECRET)
        .set('grant_type', this.GRANT_TYPE);

      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
      headers = headers.set('Accept', 'application/json');

      return this.http.post(this.tokenUrl, data.toString(), { headers: headers })
        .pipe(map( (res: any) => {
          this.token = `${ res.token_type } ${ res.access_token }`;

          setTimeout(() => { this.tokenNeedsRefresh = true; }, (res.expires_in * 1000));

          return this.token;
        }));
    } else {
      return of(this.token);
    }
  }

  getArtist(id: string) {
    const query = `artists/${ id }`;

    return this.getQuery(query);
  }

  getArtisTopTracks(id: string) {
    const query = `artists/${ id }/top-tracks?country=CO`;

    return this.getQuery(query)
      .pipe(map( data => data['tracks'] ));
  }

  getArtists(term: string): any {
    const query = `search?q=${ term }&type=artist`;

    return this.getQuery(query).pipe(map((data: any) => data.artists.items ));
  }

  getNewReleases(): any {
    const query = `browse/new-releases`;

    return this.getQuery(query).pipe(map((data: any) => data.albums.items ));
  }

}
