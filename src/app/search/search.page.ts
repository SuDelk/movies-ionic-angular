import { Component, OnInit } from '@angular/core';
import { FetchMoviesService } from '../services/fetch-movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  public moviesData : any[] =[]; // An array to store all movies data
  public filteredMovies: any[] = []; // An array to store filtered movies data
  public searchQuery: string = ''; // The search query entered by the user

  constructor(
    private fetchMovies: FetchMoviesService,
    private router:Router
    ) { }

  async ngOnInit() {
    try {
      const data = await this.fetchMovies.getMovies().toPromise();
      this.moviesData = data.results;
      this.filteredMovies = this.moviesData; // Initially, display all movies
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }

  // Function to handle the search event
  onSearch() {
    // Convert the search query to lowercase for case-insensitive filtering
    const searchQueryLower = this.searchQuery.toLowerCase();
    
    // Filter the movies based on the search query
    this.filteredMovies = this.moviesData.filter(movie =>
      movie.title.toLowerCase().includes(searchQueryLower)
    );
  }
  viewMovieDetails(movie: any) {
    this.router.navigate(['/movie-details', movie.id]);
  }
}
