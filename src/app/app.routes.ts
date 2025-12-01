import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'HomePage' } },
  {
    path: 'projects',
    loadComponent: () => import('./components/projects/projects.component').then(m => m.ProjectsComponent),
    data: { animation: 'ProjectsPage' }
  },
  {
    path: 'skills',
    loadComponent: () => import('./components/skills/skills.component').then(m => m.SkillsComponent),
    data: { animation: 'SkillsPage' }
  },
      { 
        path: 'contact', 
        loadComponent: () => import('./components/contact/contact.component').then(m => m.ContactComponent),
        data: { animation: 'ContactPage' }
      },
      { path: '**', redirectTo: '' }
    ];
