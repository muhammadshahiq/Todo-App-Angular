import { Component, Output, EventEmitter } from '@angular/core';
import { Movies, movies } from 'src/app/models/Movies';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  movies: Movies[] = [...movies];
  filteredMovieList: Movies[] = [...movies];

  onNotify() {
    alert('The movie is on sale')
  }

  filterMovies(text: string) {
    if (!text) {
      this.filteredMovieList = this.movies;
    }
    this.filteredMovieList = this.movies.filter(
      (movie) =>
        movie.name.toLowerCase().includes(text.toLowerCase())
    );
  }
}

