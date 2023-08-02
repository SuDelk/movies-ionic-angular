import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchMoviesService } from '../services/fetch-movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  public movie: any;

  constructor(
    private route: ActivatedRoute,
    private fetchMovies: FetchMoviesService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const movieId = params.get('id');
      if (movieId !== null) {
        const parsedMovieId = parseInt(movieId, 10);
        this.fetchMovies.getMovieDetails(parsedMovieId).subscribe((data) => {
          this.movie = data;
        });
      } 
    });
  }
}
