import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  
  id = 1;
  r: string = `r: string = 'http://localhost:8080/${this.id}/pet`;
  petObj: Pet;

  constructor() { 
    this.petObj = new Pet();
  }

  onSubmit() {
    
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