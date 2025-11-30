import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatChipsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  // Données exemple à remplacer par tes vrais projets (S4/S6 obligatoire)
  projects = [
    {
      title: 'Stage S4 - Développement App',
      description:
        "Développement d'une application de gestion interne. Défis : Optimisation SQL et Responsive Design.",
      image: 'assets/img/projet1.jpg',
      technos: ['Angular', 'Node.js', 'SQL'],
      link: 'https://github.com/ton-repo',
    },
    {
      title: 'Portfolio Personnel',
      description:
        'Site vitrine responsive réalisé en Angular avec une approche CI/CD.',
      image: 'assets/img/projet2.jpg',
      technos: ['Angular', 'Material', 'GitHub Pages'],
      link: 'https://github.com/ton-repo',
    },
  ];
}
