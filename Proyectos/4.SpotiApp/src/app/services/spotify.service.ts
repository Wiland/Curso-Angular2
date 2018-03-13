import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SpotifyService {
  artists:any[] = [];
  artist:any;
  topTracks:any[] = [];
  baseUrl = "https://api.spotify.com/v1/search";
  artistUrl = "https://api.spotify.com/v1/artists";
  tokenUrl = "https://accounts.spotify.com/api/token";
  token:string = "Bearer BQAFar3N6mVG9ujkkggnYKjVsOuocGMS2ObCNxS5ygata6yqBRMraUEgNuD2c_7bKnEY5RWCQLxig5Xxb6haYA";
  lastAccessTokenDate:Date;
  tokenExpiresIn:number = 0;

  constructor( private http:HttpClient ) {

  }

  getToken():any{
    let needRefresh:boolean = false;

    if (this.tokenExpiresIn === 0 || this.lastAccessTokenDate == null) {
        needRefresh = true;
    } else {
      let newDate = new Date();
      let difference = newDate.getTime() - this.lastAccessTokenDate.getTime();
      let seconds = Math.floor((difference) / (1000));
      if (seconds >= this.tokenExpiresIn) {
          needRefresh = true;
      }
    }

    if (needRefresh) {
      const CLIENT_ID:string = '17022ffe861f4b43bbf7d7aca7cee995';
      const CLIENT_SECRET:string = 'a8fd02f915414491901d65e2ab2b3528';
      const GRANT_TYPE:string = 'client_credentials';

      let data = new HttpParams()
        .set('client_id', CLIENT_ID)
        .set('client_secret', CLIENT_SECRET)
        .set('grant_type', GRANT_TYPE)

      let headers = new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded');

      headers = headers.set('Accept', 'application/json');
      // headers.set('Accept', 'application/json' );
      // headers.set('Access-Control-Allow-Origin', '*' );

      return this.http.post(this.tokenUrl, data.toString(), { headers: headers })
        .map( (res:any) => {
          return res;
          // this.token = `${ res.token_type } ${ res.access_token }`;
          // this.lastAccessTokenDate = new Date();
          // this.tokenExpiresIn = res.expires_in;
          // console.log(this.token);
        });
    }
  }

  getArtist(id:string){
    let query = `/${ id }`
    let url = this.artistUrl + query;

    let headers = new HttpHeaders();
    headers.append("authorization", this.token );
    headers.append("Accept", "application/json" );

    return this.http.get( url, { headers } )
      .map( (res:any) => {
        this.artist = res.artist;
        return this.artist;
      });
  }

  getArtisTopTracks(id:string){
    let query = `/${ id }/top-tracks?country=CO`
    let url = this.artistUrl + query;

    let headers = new HttpHeaders();
    headers.append("authorization", this.token );
    headers.append("Accept", "application/json" );


    return this.http.get( url, { headers } )
      .map( (res:any) => {
        this.topTracks = res.json().tracks;
        return this.topTracks;
      });
  }

  getArtists(term:string){
    let query = `?q=${ term }&type=artist`
    let url = this.baseUrl + query;

    console.log(this.token);
    this.getToken().subscribe( data => { this.token = `${ data.token_type } ${ data.access_token }`; console.log(this.token) });
    console.log(this.token);

    let headers = new HttpHeaders();
    headers.append("authorization", this.token );
    headers.append("Accept", "application/json" );

    return this.http.get( url, { headers } )
      .map( (res: any) => {
        this.artists = res.artist.items;
        return this.artists;
      });
  }

}
