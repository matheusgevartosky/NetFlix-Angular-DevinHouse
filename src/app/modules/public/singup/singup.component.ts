import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {


  @Input() email!:string

  constructor() { }

  ngOnInit(): void {
    console.log(this.email)
  }

}
