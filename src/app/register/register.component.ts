import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string = "";
  senha: string = "";
  EmailErro: string = "";
  ConfirmSenha: string = "";
  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }
  emailKey(value: any) {
    //Pegando  o valor do formulário
    this.email = value.target.value;

  }
  senhaKey(value: any) {
    //Pegando o valor da senha
    this.senha = value.target.value;
  }
  login(){
    //Fazendo o cadastro na minha api
    const { email, senha } = this
    this.appService.cadastro({ email, senha })
    console.log(this.email)
    console.log(this.senha)
    //Validando email
    if (this.email.length == 0) {
      this.EmailErro = " [Error] Enter email! ";
    } else if (this.email.indexOf('@') == -1) {
      this.EmailErro = "[ ERROR ] We didn't find it @";
    } else{

    }
  }
  ConfirmeSenha(evento: any){
    this.ConfirmSenha = evento.target.value;
  }
}
