import { Component, OnInit } from '@angular/core';
import { GetMoviesService } from '../../services/get-movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private moviesList: any;

  constructor(private _getMovies: GetMoviesService) { }

  ngOnInit(): void {
    this.getMovies();

  }

   async getMovies(){
    const DATA = await this._getMovies.allMovies();
    this.moviesList = DATA.results;
    console.log(this.moviesList);
  }

}
