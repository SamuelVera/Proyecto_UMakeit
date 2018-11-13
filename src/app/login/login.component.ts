import { Cliente } from './../clases/cliente';
import { Component, OnInit} from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit{

    //Cliente a pasar
  user: Cliente = {
    email: '',
    displayName:'',
    cedula: '',
    telefono: '',
    direccion: '',
    envios: [''],
    admin: false
  };
  pass: string;
  llenar: boolean = false;


  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  login(e){
    if(this.user.email.length > 0 && this.pass.length > 0){
      this.auth.login(this.user.email,this.pass);
      this.llenar = false;
    }else{
      this.llenar = true;
    }
  }
}