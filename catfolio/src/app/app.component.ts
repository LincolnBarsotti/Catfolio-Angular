import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuNavBarComponent } from './components/menu-nav-bar/menu-nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuNavBarComponent, FooterComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'catfolio';
}
