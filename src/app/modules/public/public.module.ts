import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

import { PublicRoutingModule } from './public-routing.module';
import { LandingComponent } from './landing/landing.component';
import { SingupComponent } from './singup/singup.component';
import { LoginComponent } from './login/login.component';
import { RecoverComponent } from './recover/recover.component';
import { PublicPageComponent } from './layout/public-page/public-page.component';


@NgModule({
  declarations: [
    PublicPageComponent,
    LandingComponent,
    SingupComponent,
    LoginComponent,
    RecoverComponent,
    
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    RouterModule
  ]
})
export class PublicModule { }
