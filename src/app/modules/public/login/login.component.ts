import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { CreateUserService } from '../services/create-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  returnedData:any;

  formLogin: FormGroup = this.fb.group({
    username: ['',[Validators.required, Validators.email]],
    password: ['',[Validators.required]]
  })

  constructor(private fb:FormBuilder, private userMethods:CreateUserService, private route: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.returnedData = this.userMethods.getUser(this.formLogin.value.username)
    if(this.returnedData == null){
      alert('Usuário não cadastrado')
    }
    else if(this.returnedData.password != this.formLogin.value.password){
       alert('Senha incorreta')
    }else{

      this.route.navigate(['/private/home'])
    }

}
}
