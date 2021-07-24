import { FormBuilder, FormGroup } from '@angular/forms';
import { Component,  OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string = "";
  senha: string = "";
  ConfirmSenha: string = "";

  //Varíaveis de armarzenamento de senhas 
  EmailErro: string = "";
  SenhaErro: string = "";
  ConfirmSenhaErro: string = "";

  //intancias
  formulario!: FormBuilder;
  myform!: FormGroup;
  constructor(private appService: AppService) { 

    this.formulario.group({
      email: [null],
      senha: [null],
      confirmSenha: [null] 
    })
  }

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
  ConfirmeSenha(evento: any){
    //Pegando o valor do confirmar senha!
    this.ConfirmSenha = evento.target.value;
  }
  login(){

    //Validando email
    if (this.email.length == 0) {
      this.EmailErro = " [Error] Enter email! ";
    } else if (this.email.indexOf('@') == -1) {
      this.EmailErro = "[ ERROR ] We didn't find it @";
    } else {
      this.EmailErro = "";
    }
      //Validando senha

      //Vendo se o usuário digitou a primeira senha
      if ( this.senha.length == 0 ){
          this.SenhaErro = "[Error] enter your password";
      }else {
        this.SenhaErro = "";
      }
      //Vendo se o usuário digitou a senha
      if (this.ConfirmSenha.length == 0){
          this.ConfirmSenhaErro = "[Error] enter your password";
      }else {
        this.ConfirmSenhaErro = "";
      }
      //Vendo se ele digitou uma senha forte
      if (this.ConfirmSenha.length < 6){
        this.ConfirmSenhaErro = "[Error] enter your password";
      }else {
        this.ConfirmSenhaErro = "[Error] the password is too weak";
      }
      //Vendo se a primeira senha e igual a segunda senha 
      if (this.ConfirmSenha !== this.senha){
        this.ConfirmSenhaErro = "[ Error ] the password different from the first";
      }else{
        this.ConfirmSenhaErro = "";
      }
      //Registrando o email e a senha após a validação
      if (this.EmailErro.length == 0 && this.SenhaErro.length == 0 && this.ConfirmSenhaErro.length == 0 ){
        //Fazendo o cadastro na minha api
        const { email, senha } = this
        this.appService.cadastro({ email, senha })
        console.log(this.email)
        console.log(this.senha)  
  
  
      }

    }
  }
  
