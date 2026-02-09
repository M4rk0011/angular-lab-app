import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  appTitle: string = 'APPDEV LAB EXAM';
  studentCount: number = 50;
  isActive: boolean = true;
  version: number = 1.0;
  currentYear: number = new Date().getFullYear();

  welcomeMessage: string = 'Welcome to My APPDEV Exam!';
  description: string = 'This Exam demonstrates How We Built Website or an Application Using Angular.';
  

  features = [
    { 
      icon: 'bi-layers', 
      title: 'Component-Based', 
      description: 'Modular architecture with reusable components' 
    },
    { 
      icon: 'bi-signpost-split', 
      title: 'Client-Side Routing', 
      description: 'Seamless navigation with Angular Router' 
    },
    { 
      icon: 'bi-input-cursor-text', 
      title: 'Reactive Forms', 
      description: 'Form handling with validation and submission' 
    },
    { 
      icon: 'bi-type', 
      title: 'TypeScript', 
      description: 'Strong typing with interfaces and type aliases' 
    },
    { 
      icon: 'bi-bootstrap', 
      title: 'Bootswatch Theme', 
      description: 'Professional styling with Minty theme' 
    },
    { 
      icon: 'bi-git', 
      title: 'Version Control', 
      description: 'Git integration with meaningful commits' 
    }
  ];
  
  
  student = {
    name: 'Mark Lloyd Yadao',
    course: 'BSIT - Application Development',
    examCode: 'SIT-FO-007-002-APPDEV1',
    instructor: 'Erna Martinez'
  };
}