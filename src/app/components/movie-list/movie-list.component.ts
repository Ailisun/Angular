import { Component, OnInit } from '@angular/core';
import {IMovie} from "../../interfaces";
import {MovieService} from "../../services";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: IMovie[]
  constructor( private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(value => this.movies = value.results)
  }

}
