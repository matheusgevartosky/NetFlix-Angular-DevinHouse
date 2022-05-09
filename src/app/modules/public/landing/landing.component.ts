
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
inputEmail:any = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public goToSingUp(){
   this.router.navigate(['/home/cadastrar'])
  }
}
