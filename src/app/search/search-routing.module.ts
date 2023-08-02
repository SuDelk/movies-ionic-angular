import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchPage } from './search.page';
import { MovieDetailsPage } from '../movie-details/movie-details.page';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchPage },
  { path: 'movie-details/:id', component: MovieDetailsPage }, // Add the movie details route with a parameter named 'id'
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchPageRoutingModule {}
