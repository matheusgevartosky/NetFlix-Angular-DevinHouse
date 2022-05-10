import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/moviepage/movie.component';
import { PlayerComponent } from './components/player/player.component';
import { FullpageComponent } from './layout/fullpage/fullpage.component';

const routes: Routes = [
  {
    path: 'home', component: FullpageComponent,
    children:[
      { path:'', component: HomeComponent},
      { path: 'detalhes', component: MovieComponent}
    ]
  },
  {
    path:'player', component: PlayerComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
