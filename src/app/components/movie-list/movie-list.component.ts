import { Component, Output, EventEmitter } from '@angular/core';
import { movies } from 'src/app/models/Movies';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  search!: string;
  movies = [...movies];

  onNotify() {
    alert('The movie is on sale')
  }
}

