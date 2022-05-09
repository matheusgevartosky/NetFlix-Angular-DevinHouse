import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/moviepage/movie.component';
import { PlayerComponent } from './components/player/player.component';
import { FullpageComponent } from './layout/fullpage/fullpage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    HomeComponent,
    MovieComponent,
    PlayerComponent,
    FullpageComponent,
    NavbarComponent,
    FooterComponent

  ],
  imports: [
    CommonModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
