import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressBarModule,
    MatChipsModule,
    MatIconModule,
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  hardSkills = [
    { name: 'Angular / TypeScript', level: 80 },
    { name: 'HTML5 / SCSS', level: 90 },
    { name: 'Java / OOP', level: 70 },
    { name: 'Git / GitHub', level: 75 },
  ];

  softSkills = [
    'Gestion de projet (Agile)',
    'Travail en équipe',
    'Autonomie',
    'Résolution de problèmes',
  ];
}
