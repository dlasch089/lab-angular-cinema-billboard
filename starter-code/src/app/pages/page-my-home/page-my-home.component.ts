import { Component, OnInit } from '@angular/core';
import { MoviesInformationService } from '../../services/movies-information.service';

@Component({
  selector: 'app-page-my-home',
  templateUrl: './page-my-home.component.html',
  styleUrls: ['./page-my-home.component.css']
})
export class PageMyHomeComponent implements OnInit {
  movies: Object[] = this.TheMoviesService.moviesCollection;

  constructor(private TheMoviesService: MoviesInformationService) { }

  ngOnInit() {
  }

}
