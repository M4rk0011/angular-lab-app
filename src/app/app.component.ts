import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // ← Make sure this is imported
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent], // ← RouterOutlet must be here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-lab-app';


}
