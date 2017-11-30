import { Injectable } from '@angular/core';
import { movieList } from '../data/movies';
import { Movies } from '../models/movies';

@Injectable()
export class MoviesInformationService {
  moviesCollection: Movies[];
  
  newMovie = new Movies();

  constructor() { 
    this.moviesCollection = movieList;
   }

  getMovies() {
    return this.moviesCollection;
  }

  getMovie(id: number) {
    return this.moviesCollection.find(movie => movie.id === id); // comparing a number with a string
  }
}
