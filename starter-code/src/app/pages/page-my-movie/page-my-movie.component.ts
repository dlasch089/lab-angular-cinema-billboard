import { Component, OnInit } from '@angular/core';
import { MoviesInformationService } from '../../services/movies-information.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-my-movie',
  templateUrl: './page-my-movie.component.html',
  styleUrls: ['./page-my-movie.component.css']
})
export class PageMyMovieComponent implements OnInit {
  movies: Object[] = this.TheMoviesService.moviesCollection;
  movie: Object = null;
  constructor(private TheMoviesService: MoviesInformationService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.movie = this.TheMoviesService.getMovie(parseInt(params.id, 10));
    });
  }

}
