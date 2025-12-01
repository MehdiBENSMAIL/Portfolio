import { Component, HostListener } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { ThemeService } from '../../services/theme.service';
import { TranslationService } from '../../services/translation.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    RouterLink,
    RouterLinkActive,
    MatIconModule,
    CommonModule,
    MatMenuModule,
    TranslatePipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMenuOpen = false;

  constructor(
    public themeService: ThemeService,
    public translationService: TranslationService
  ) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const clickedInsideMenu = target.closest('.nav-links');
    const clickedBurger = target.closest('.burger-menu');
    
    if (this.isMenuOpen && !clickedInsideMenu && !clickedBurger) {
      this.closeMenu();
    }
  }

  switchLanguage(lang: 'fr' | 'en') {
    this.translationService.setLanguage(lang);
  }

  get resumeLink(): string {
    // TODO: Replace the English path with '/assets/CV_mbs_en.pdf' when the file is available
    return this.translationService.lang() === 'en' ? '/assets/files/CV_mbs_en.pdf' : '/assets/files/CV_mbs.pdf';
  }
}
