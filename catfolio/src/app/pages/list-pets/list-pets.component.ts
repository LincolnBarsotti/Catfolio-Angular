import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pets',
  standalone: true,
  imports: [HttpClientModule, FormsModule],
  templateUrl: './list-pets.component.html',
  styleUrl: './list-pets.component.css'
})
export class ListPetsComponent implements OnInit{
  content: any[] = [];

  idUser = localStorage.getItem('idUser');
  
  url: string = `http://localhost:8080/${this.idUser}/pet`;

  constructor(private http: HttpClient, private router: Router){

  }

  ngOnInit(): void {

    this.http.get(this.url).subscribe((res: any) => {
      if (res.page && res.page.content) {
        this.content = res.page.content;
        console.log('Content:', this.content);
        if (this.content.length > 0) {
          alert('Content loaded successfully');
        } else {
          alert('No content available');
        }
      } else {
        alert('Failed to load content');
      }
    });

  }


}
