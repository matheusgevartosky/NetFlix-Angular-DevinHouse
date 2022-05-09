import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { PublicPageComponent } from './layout/public-page/public-page.component';
import { SingupComponent } from './singup/singup.component';
import { RecoverComponent } from './recover/recover.component';

const routes: Routes = [
  {
    path:'home', component: PublicPageComponent,
    children:[
      {path:'', component: LandingComponent},
      {path: 'login', component: LoginComponent},
      {path: 'cadastrar', component: SingupComponent},
      {path: 'recuperar', component: RecoverComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
