import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  r: string = 'http://localhost:8080/login';
  loginObj: Login;

  constructor(private http: HttpClient, private router: Router) {
    this.loginObj = new Login();
  }

  onLogin() {
    this.http.post(this.r, this.loginObj).subscribe((res:any) => {
      if(res.email){
        localStorage.setItem('idUser', res.id);
        alert('Login realizado com sucesso');
        this.router.navigateByUrl('/dashboard'); 
      }
    });
  }
}

export class Login {
  email: string;
  senha: string;
  constructor() {
    this.email = '';
    this.senha = '';
  }
}
