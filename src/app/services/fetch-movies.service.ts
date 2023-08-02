import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchMoviesService {

  urlForAll='https://api.themoviedb.org/3/trending/movie/day?api_key=808cb3beb97946d30b236c220697a369';
  urlForDetails = 'https://api.themoviedb.org/3/movie/';
  apiKey = '808cb3beb97946d30b236c220697a369';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<any> {
    return this.http.get(this.urlForAll);
  }

  getMovieDetails(movieId: number): Observable<any> {
    const url = `${this.urlForDetails}${movieId}?api_key=${this.apiKey}`;
    return this.http.get(url);
  }
}
