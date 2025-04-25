import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  template: `
    <h2>Select a Semester</h2>
    <nav>
      <ul>
        <li><a routerLink="Semester-1">Semester 1</a></li>
        <li><a routerLink="Semester-2">Semester 2</a></li>
        <li><a routerLink="Semester-3">Semester 3</a></li>
      </ul>
    </nav>
    
    <!-- This will display the semester component when a semester is selected -->
    <router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class PortfolioComponent {}