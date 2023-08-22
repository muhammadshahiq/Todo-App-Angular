import { Component, Output, EventEmitter } from '@angular/core';
import { movies, Movies } from 'src/app/models/Movies';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent {
  search!: string;
  movies: Movies[] = [...movies];

  onNotify(movie: Movies) {
    alert(`${movie.name} movie is on sale`);
  }
}
