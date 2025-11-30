import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatChipsModule, TranslatePipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  // Données exemple à remplacer par tes vrais projets (S4/S6 obligatoire)
  projects = [
    {
      title: 'PROJECTS.P1.TITLE',
      description: 'PROJECTS.P1.DESC',
      image: 'assets/img/projet1.jpg',
      technos: ['Angular', 'Node.js', 'SQL'],
      link: 'https://github.com/ton-repo',
    },
    {
      title: 'PROJECTS.P2.TITLE',
      description: 'PROJECTS.P2.DESC',
      image: 'assets/img/projet2.jpg',
      technos: ['Angular', 'Material', 'GitHub Pages'],
      link: 'https://github.com/ton-repo',
    },
  ];
}
