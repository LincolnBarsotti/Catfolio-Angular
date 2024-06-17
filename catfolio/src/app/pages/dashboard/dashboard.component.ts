import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  idUser = localStorage.getItem('idUser');
  
  url: string = `http://localhost:8080/${this.idUser}/pet`;

  petObj: Pet;

  constructor(private http: HttpClient, private router: Router) { 
    this.petObj = new Pet();
  }

  onSubmit() {
    console.log(this.idUser);
    console.log(this.petObj);
    
    this.http.post(this.url, this.petObj).subscribe((res:any) => {
      if(res.petDto){
        alert('Seu Pet foi cadastrado com sucesso');
        this.router.navigateByUrl('/list-pet'); 
      }
    });
  
  }

}

export class Pet {
  nome: string;
  raca: string;
  dataDeNascimento: string;
  
  constructor(){
    this.dataDeNascimento = "";
    this.nome = "";
    this.raca = "";
  }
}