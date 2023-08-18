import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movies, movies } from 'src/app/models/Movies';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{
  movies: Movies | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const movieIdFromRoute = Number(routeParams.get('movie_id'));
  
    // Find the product that correspond with the id provided in route.
    this.movies = movies.find(movie => movie.id === movieIdFromRoute);
  }
}
