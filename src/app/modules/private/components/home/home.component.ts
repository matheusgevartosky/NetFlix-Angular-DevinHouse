import { Component, OnInit } from '@angular/core';
import { MovieInterface } from '../../interfaces/movie-interface';
import { GetMoviesService } from '../../services/get-movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public movie!:MovieInterface[];

  constructor(private _getMovies: GetMoviesService, private router: Router) { }

  ngOnInit(): void {
    this.getMovies();

  }

   async getMovies(){
    const DATA = await this._getMovies.allMovies();
    this.movie = DATA.results;
    console.log(this.movie);
  }

  goToDetails(id:any){
    this.router.navigate(['/home/detalhes'])
  }

}
