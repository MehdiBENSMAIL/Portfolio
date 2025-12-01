import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '../../pipes/translate.pipe';

interface ProjectRect {
  top: number;
  left: number;
  width: number;
  height: number;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatChipsModule, MatIconModule, TranslatePipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  activeProject: any = null;
  isExpanded = false; // Triggers the CSS transition to final state
  initialRect: ProjectRect | null = null;

  projects = [
    {
      title: 'PROJECTS.P1.TITLE',
      description: 'PROJECTS.P1.DESC',
      fullDescription: 'PROJECTS.P1.FULL_DESC',
      image: 'assets/img/systancia.png',
      technos: ['Inno Setup', 'PowerShell', 'Python', 'Pandas', 'Angular', 'Node.js', 'SQL Server', 'Azure DevOps', 'IIS'],
      link: null,
    },
    {
      title: 'PROJECTS.P2.TITLE',
      description: 'PROJECTS.P2.DESC',
      fullDescription: 'PROJECTS.P2.FULL_DESC',
      image: 'assets/img/ng.png',
      technos: ['Angular', 'TypeScript', 'SCSS', 'Material', 'GitHub Actions'],
      link: 'https://github.com/MehdiBENSMAIL/Portfolio',
    },
    {
      title: 'PROJECTS.P3.TITLE',
      description: 'PROJECTS.P3.DESC',
      fullDescription: 'PROJECTS.P3.FULL_DESC',
      image: 'assets/img/hsb.png',
      technos: ['Python', 'OpenCV', 'ROS', 'Jetson Nano', 'Lidar'],
      link: 'https://github.com/aqfel/AI-in-Robotics',
    },
  ];

  openProject(project: any, event: MouseEvent) {
    const target = (event.currentTarget as HTMLElement);
    const rect = target.getBoundingClientRect();

    this.initialRect = {
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height
    };

    this.activeProject = project;

    // Small delay to allow the *ngIf to render the clone at initial position
    // before applying the class that moves it to the center
    setTimeout(() => {
      this.isExpanded = true;
    }, 50);
  }

  closeProject() {
    this.isExpanded = false;
    // Wait for transition to finish before removing from DOM
    setTimeout(() => {
      this.activeProject = null;
      this.initialRect = null;
    }, 300); // Matches CSS transition duration
  }
}
