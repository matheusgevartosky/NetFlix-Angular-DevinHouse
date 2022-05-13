import { Component, OnInit } from '@angular/core';
import { MovieInterface } from '../../interfaces/movie-interface';
import { GetMoviesService } from '../../services/get-movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public movie!:MovieInterface[];

  constructor(private _getMovies: GetMoviesService) { }

  ngOnInit(): void {
    this.getMovies();

  }

   async getMovies(){
    const DATA = await this._getMovies.allMovies();
    this.movie = DATA.results;
    console.log(this.movie);
  }

}
