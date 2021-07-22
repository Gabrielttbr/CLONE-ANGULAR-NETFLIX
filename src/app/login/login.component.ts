
import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = "";
  senha: string ="";
  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }
  emailKey(value:any){
    this.email = value.target.value;
  }
  senhaKey(value: any){
    this.senha = value.target.value;
  } 
  login(){
    const {email, senha} = this
    this.appService.cadastro({email, senha})
    console.log(this.email)
    console.log(this.senha)
  }
}
