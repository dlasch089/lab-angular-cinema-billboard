import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'; // near the other angular-modules

import { AppComponent } from './app.component';

import { MoviesInformationService } from './services/movies-information.service';

import { PageMyHomeComponent } from './pages/page-my-home/page-my-home.component';
import { PageMyMovieComponent } from './pages/page-my-movie/page-my-movie.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: PageMyHomeComponent },
  { path: 'movie/:id', component: PageMyMovieComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageMyHomeComponent,
    PageMyMovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MoviesInformationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
