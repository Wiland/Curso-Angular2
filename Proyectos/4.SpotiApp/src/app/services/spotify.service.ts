import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  artists:any[] = [];
  artist:any;
  topTracks:any[] = [];
  baseUrl = "https://api.spotify.com/v1/search";
  artistUrl = "https://api.spotify.com/v1/artists";
  token:string = "Bearer BQBH8ab7nyYFWuZ-NutT5rrqsB94m4kDjLLKGuZcQOJJz9yYTTbpfVzfSFAVTq50TG4OJU2sEsb6Ja2PNCgZqA";

  constructor( private http:Http ) {

  }

  getArtist(id:string){
    let query = `/${ id }`
    let url = this.artistUrl + query;

    let headers = new Headers();
    headers.append("authorization", this.token );
    headers.append("Accept", "application/json" );


    return this.http.get( url, { headers } ).map( res => {
      this.artist = res.json();
      return this.artist;
    });
  }

  getArtisTopTracks(id:string){
    let query = `/${ id }/top-tracks?country=CO`
    let url = this.artistUrl + query;

    let headers = new Headers();
    headers.append("authorization", this.token );
    headers.append("Accept", "application/json" );


    return this.http.get( url, { headers } ).map( res => {
      this.topTracks = res.json().tracks;
      console.log(this.topTracks);
      return this.topTracks;
    });
  }

  getArtists(term:string){
    let query = `?q=${ term }&type=artist`
    let url = this.baseUrl + query;

    let headers = new Headers();
    headers.append("authorization", this.token );
    headers.append("Accept", "application/json" );


    return this.http.get( url, { headers } ).map( res => {
      this.artists = res.json().artists.items;
      return this.artists;
    });
  }

}
