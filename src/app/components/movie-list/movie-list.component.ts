import { Component, Output, EventEmitter } from '@angular/core';
import { Movies, movies } from 'src/app/models/Movies';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  search!: string;
  movies = [...movies];
  @Output() addCart: EventEmitter<Movies> = new EventEmitter();



  addToCart() {
    this.addCart.emit()
    alert('The Movie is added to cart')
  }
  onNotify(){
    alert('The movie is on sale')
  }
}

