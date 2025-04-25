import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-semester',
  template: `
    <h3>Viewing {{ semesterId }} Portfolio</h3>
    <a routerLink="/portfolio">Back to all semesters</a>

    <!-- Your semester content here -->
  `,
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class SemesterComponent {
  private route = inject(ActivatedRoute);
  semesterId = this.route.snapshot.paramMap.get('semesterId');
}