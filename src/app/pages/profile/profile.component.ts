import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface UserProfile {
  name: string;
  email: string;
  age: number;
  location: string;
  bio: string;
  joinDate: Date;
  isVerified: boolean;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  
  user: UserProfile = {
    name: 'Mark Lloyd Yadao',
    email: '20236590@s.ubaguio.edu',
    age: 21,
    location: 'Taralc, Philippines',
    bio: 'Currently studying web development fundamentals.',
    joinDate: new Date('2024-08-15'),
    isVerified: true
  };
  

  getMemberDuration(): string {
    const now = new Date();
    const diff = now.getTime() - this.user.joinDate.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    return `${days} days`;
  }
}