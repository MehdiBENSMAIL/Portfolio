import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLang = signal<'fr' | 'en'>('fr');

  public lang = this.currentLang.asReadonly();

  private translations: any = {
    fr: {
      HEADER: {
        HOME: 'Accueil',
        PROJECTS: 'Projets',
        SKILLS: 'Compétences',
        CONTACT: 'Contact',
        CV: 'Mon CV'
      },
      HOME: {
        HELLO: 'Bonjour, je suis',
        ROLE: 'Développeur Web & Mobile',
        INTRO: 'Passionné par la création numérique, ce portfolio est une vitrine de mon parcours et une réflexion sur mes acquis techniques. Actuellement étudiant, je cherche à transformer des problèmes complexes en interfaces simples et performantes.',
        BUTTON: 'Voir mes réalisations'
      },
      CONTACT: {
        TITLE: 'Me Contacter',
        SUBTITLE: 'Une question ou une proposition de stage ? N\'hésitez pas !',
        NAME: 'Votre Nom',
        EMAIL: 'Votre Email',
        MESSAGE: 'Message',
        SEND: 'ENVOYER'
      },
      PROJECTS: {
        TITLE: 'Mes Projets',
        VIEW_CODE: 'VOIR LE CODE',
        P1: {
          TITLE: 'Stage S4 - Développement App',
          DESC: 'Développement d\'une application de gestion interne. Défis : Optimisation SQL et Responsive Design.'
        },
        P2: {
          TITLE: 'Portfolio Personnel',
          DESC: 'Site vitrine responsive réalisé en Angular avec une approche CI/CD.'
        }
      },
      SKILLS: {
        TITLE: 'Mes Compétences',
        TECHNICAL: 'Techniques',
        SOFT_TOOLS: 'Soft Skills & Outils',
        SOFT: {
          AGILE: 'Gestion de projet (Agile)',
          TEAMWORK: 'Travail en équipe',
          AUTONOMY: 'Autonomie',
          PROBLEM_SOLVING: 'Résolution de problèmes'
        }
      }
    },
    en: {
      HEADER: {
        HOME: 'Home',
        PROJECTS: 'Projects',
        SKILLS: 'Skills',
        CONTACT: 'Contact',
        CV: 'My Resume'
      },
      HOME: {
        HELLO: 'Hello, I am',
        ROLE: 'Web & Mobile Developer',
        INTRO: 'Passionate about digital creation, this portfolio is a showcase of my journey and a reflection on my technical skills. Currently a student, I aim to transform complex problems into simple and efficient interfaces.',
        BUTTON: 'See my work'
      },
      CONTACT: {
        TITLE: 'Contact Me',
        SUBTITLE: 'A question or an internship proposal? Don\'t hesitate!',
        NAME: 'Your Name',
        EMAIL: 'Your Email',
        MESSAGE: 'Message',
        SEND: 'SEND'
      },
      PROJECTS: {
        TITLE: 'My Projects',
        VIEW_CODE: 'VIEW CODE',
        P1: {
          TITLE: 'Internship S4 - App Development',
          DESC: 'Development of an internal management application. Challenges: SQL Optimization and Responsive Design.'
        },
        P2: {
          TITLE: 'Personal Portfolio',
          DESC: 'Responsive showcase site built with Angular using a CI/CD approach.'
        }
      },
      SKILLS: {
        TITLE: 'My Skills',
        TECHNICAL: 'Technical',
        SOFT_TOOLS: 'Soft Skills & Tools',
        SOFT: {
          AGILE: 'Project Management (Agile)',
          TEAMWORK: 'Teamwork',
          AUTONOMY: 'Autonomy',
          PROBLEM_SOLVING: 'Problem Solving'
        }
      }
    }
  };

  constructor() {}

  setLanguage(lang: 'fr' | 'en') {
    this.currentLang.set(lang);
  }

  translate(key: string): string {
    const keys = key.split('.');
    let value = this.translations[this.currentLang()];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  }
}
