import { CreateUserService } from './../services/create-user.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {

  form: FormGroup = this.fb.group({
    name: [''],
    surname: [''],
    email: [''],
    password: ['']
  })


  @Input() email!:string

  constructor( private usersMethod : CreateUserService, private fb:FormBuilder) { }

  ngOnInit(): void {


  }

  setUser(){
    this.usersMethod.setUser(this.form.value.email, this.form.value)
  }

}
