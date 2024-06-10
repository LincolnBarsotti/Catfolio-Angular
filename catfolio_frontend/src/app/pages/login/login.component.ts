import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  r:string = "http://localhost:8080/login";
  loginObj: Login;

  constructor(private http: HttpClient){
    this.loginObj = new Login;
  }

  onLogin(){
    this.http.post(this.r, this.loginObj).subscribe((res:any) => {
      if (res.result) {
        alert("Login success")
      }
    } )
  }
}

export class Login{
  email: string;
  senha: string;
  constructor(){
    this.email = '';
    this.senha = ''
  }
}
