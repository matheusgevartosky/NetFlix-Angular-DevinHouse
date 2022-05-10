import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetMoviesService {

  private url = environment.filmesAPI

  constructor(private _http: HttpClient) { }

  public allMovies(){
    return new Promise<any>((resolve) => {
      this._http.get(this.url)
      .subscribe(data => {
        resolve(data)
      })
    })
  }

}
