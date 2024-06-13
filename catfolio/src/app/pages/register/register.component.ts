import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})


export class RegisterComponent{

  r: string = 'http://localhost:8080/register';
  registroForm: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.registroForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      dataDeNascimento: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registroForm.valid) {
      this.http.post(this.r, this.registroForm.value).subscribe((res: any) => {
        if (res.email) {
          alert("Registro feito com sucesso")
        }
          
      });
    } else {
      alert('Formulário inválido');
    }
  }
}

