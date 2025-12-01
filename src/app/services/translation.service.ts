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
        CV: 'CV'
      },
      HOME: {
        HELLO: 'Portfolio de ',
        ROLE: 'Apprenti en BUT Informatique à l\'UMLP / Systancia',
        INTRO: "Apprenti au sein de l'Université Marie et Louis Pasteur et de Systancia, je suis en troisième année de BUT Informatique. Animé par la création numérique et la robotique, ce portfolio est une vitrine de mon parcours au sein de l'UMLP et de Systancia, ainsi qu'un reflet de mes acquis techniques. Mon but est de résoudre des problèmes et de comprendre ce qui m'entoure, aussi bien dans l'informatique que dans la vie courante. Bien que j'aspire au développement bas niveau et à des technologies bien en place, je continue de me maintenir au courant des actualités du monde de l'informatique par le biais d'articles, d'ouvrages ou encore de podcasts.",
        BUTTON: 'Réalisations',
        EDUCATION_TITLE: 'Ma Formation',
        EDUCATION: {
            BUT: {
                TITLE: 'BUT Informatique',
                SCHOOL: 'IUT Nord Franche-Comté (Belfort) - 2023 / 2026',
                DESC: 'Alternance au sein de Systancia. Spécialisation développement d\'applications. Algorithmique, programmation, architecture systèmes et réseaux, génie logiciel et développement web.'
            },
            BAC: {
                TITLE: 'Baccalauréat Général',
                SCHOOL: 'Lycée Gustave Courbet (Belfort) - 2023',
                DESC: 'Spécialité Mathématiques et NSI (Numérique et Sciences Informatiques). Mention BIEN.'
            },
            PMM: {
                TITLE: 'Préparation Militaire Marine',
                SCHOOL: 'Centre PMM de Belfort - 2022',
                DESC: 'Formation militaire et maritime. Deuxième de promotion. Obtention du PSC1 (Prévention et Secours Civiques).'
            }
        }
      },
      CONTACT: {
        TITLE: 'Me Contacter',
        SUBTITLE: 'Pour toutes questions ou propositions',
        NAME: 'Nom',
        EMAIL: 'Email',
        MESSAGE: 'Message',
        SEND: 'ENVOYER'
      },
      PROJECTS: {
        TITLE: 'Mes Projets',
        VIEW_CODE: 'VOIR LE CODE',
        P1: {
          TITLE: "BUT 2 - Projets d'entreprise",
          DESC: 'Développement d\'une application de gestion interne. Défis : Optimisation SQL et Responsive Design.',
          FULL_DESC: `<h1>Semestre 3 et 4</h1>

<h2>Compétence 1 : Réaliser un développement d'application</h2>
<p><strong>Détails de la compétence :</strong> Cette compétence se décompose en plusieurs apprentissages critiques (AC) que j'ai pu développer à travers mes projets :</p>
<ul>
    <li><strong>AC 1 :</strong> Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences.</li>
    <li><strong>AC 2 :</strong> Appliquer des principes d'accessibilité et d'ergonomie.</li>
    <li><strong>AC 3 :</strong> Adopter de bonnes pratiques de conception et de programmation.</li>
    <li><strong>AC 4 :</strong> Vérifier et valider la qualité de l'application par les tests.</li>
</ul>

<h3>Trace 1.1 : Architecture des Installateurs de Solutions Systancia</h3>
<img src="/assets/img/trace-1-1.svg" alt="Diagramme illustrant l'installateur principal Identity">
<blockquote><strong>Légende :</strong> Architecture simplifiée des installateurs Inno Setup pour les solutions liées à Systancia Identity.</blockquote>

<h3>Présentation</h3>
<p>Cette trace illustre l'architecture des installeurs développés avec Inno Setup, leurs relations et la manière dont ils sont organisés. Les installateurs de Federation et de Identity Provisionning sont indépendants et les désinstallateurs également.</p>

<h3>Savoirs mobilisés</h3>
<ul>
    <li>La capacité à analyser des systèmes existants et à traduire les besoins des clients en spécifications fonctionnelles et non fonctionnelles (telles que la modularité, la robustesse, l'ergonomie, et l'intégration continue).</li>
    <li>La conception d'interfaces utilisateur (UI) qui respectent les principes d'ergonomie et de clarté est essentielle pour améliorer l'expérience utilisateur et l'efficacité des applications, notamment par l'intégration de champs préremplis et de listes dynamiques.</li>
    <li>L'adoption de bonnes pratiques, incluant la modularité, la gestion rigoureuse des erreurs, des divers cas d'usages (architecture, installations et configurations actuelles, composants, etc.), la journalisation exhaustive et la sécurisation des données sensibles.</li>
    <li>La vérification et la validation par des tests (fonctionnels, d'acceptation, de prérequis, de données) sont des étapes indispensables pour garantir la qualité, la conformité et la sécurité d'une application avant son déploiement.</li>
</ul>

<h3>Savoir-faire mis en œuvre</h3>
<ul>
    <li>J'ai mené une analyse approfondie des logiciels existants (Identity, Federation, Identity Provisioning) pour comprendre leur architecture et leur fonctionnement, ce qui m'a permis d'identifier les exigences de refonte. J'ai ensuite formalisé les besoins, en tenant compte des exigences initiales (alternative gratuite, open source, riche en fonctionnalités, intégrable continuellement, exécutable silencieusement) et en gérant l'évolution de ces besoins (passage d'un installateur simple à une version permettant la sélection individuelle des produits et la récupération dynamique d'informations via des requêtes vers l'Identity Provider (IdP)). J'ai implémenté un installateur qui répond à ces spécifications, en étant modulaire et robuste.</li>
    <li>J'ai conçu des interfaces claires et concises pour l'installateur afin d'optimiser son ergonomie. J'ai intégré des fonctionnalités telles que des champs préremplis et des listes dynamiquement alimentées (par exemple, avec les certificats disponibles et les magasins de certificats de la machine courante), facilitant ainsi l'interaction et réduisant les erreurs pour l'utilisateur final.</li>
    <li>J'ai développé l'installateur en appliquant des principes de conception modulaires et robustes, en utilisant notamment PowerShell pour la logique sous-jacente. J'ai mis en œuvre des mécanismes de gestion des erreurs (blocs <code>try-catch</code> et utilisation de codes de retour) et une journalisation complète du processus pour assurer sa fiabilité. J'ai également veillé à la sécurité des données, en assurant que les mots de passe soient stockés correctement et ne soient jamais affichés en clair. J'ai étudié les architectures des API REST et leur documentation grâce à l'utilisation de Swagger.</li>
    <li>J'ai mis en œuvre une stratégie de tests rigoureuse pour valider la qualité de l'installateur. J'ai effectué de nombreux tests de prérequis (vérification de l'environnement .NET, de l'architecture, du module de réécriture d'URL d'IIS) et des tests sur les données (tests des comptes de services via des requêtes vers l'AD, tests de connexion aux bases de données, etc.) pour renforcer la sécurité.
        <ul>
            <li>Pour connaître le fonctionnement et l'architectures des diverses applications, j'ai d'abord commencé par réaliser des tests d'acceptations, cela m'a permis d'apprendre à comprendre les enjeux et l'importance de la validation logicielle au sein d'une équipe de développement. J'ai appris à me servir de divers outils pour réaliser mes tests tel que l'utilisation de l'observateur d'évènements, de la console et l'analyse réseau du navigateur ou encore des logs générés par Hangfire.</li>
        </ul>
    </li>
</ul>

<hr>

<h2>Compétence 2 : Optimiser des applications</h2>
<p><strong>Détails de la compétence :</strong> Cette compétence se décompose en plusieurs apprentissages critiques (AC) que j'ai pu développer à travers mes projets :</p>
<ul>
    <li><strong>AC 1 :</strong> Choisir des structures de données complexes adaptées au problème.</li>
    <li><strong>AC 2 :</strong> Utiliser des techniques algorithmiques adaptées au problème.</li>
    <li><strong>AC 3 :</strong> Comprendre les enjeux et moyens de sécurisation des données et du code.</li>
    <li><strong>AC 4 :</strong> Évaluer l'impact environnemental et sociétal des solutions proposées.</li>
</ul>

<h3>Traces</h3>
<ol>
    <li><strong>Trace 2.1 :</strong> <img src="/assets/img/c2-1.png" alt="Capture d'écran de code Python illustrant l'optimisation par multithreading">
        <ul>
            <li><em>Légende :</em> Extrait de code Python illustrant l'utilisation du multithreading pour ne pas bloquer l'interface graphique.</li>
        </ul>
    </li>
    <li><strong>Trace 2.2 :</strong> <img src="/assets/img/c2-2.png" alt="Capture d'écran de code Python illustrant l'optimisation par multithreading">
        <ul>
            <li><em>Légende :</em> Extrait de code Python illustrant l'utilisation du multithreading pour une génération de données optimisée.</li>
        </ul>
    </li>
</ol>

<h3>Présentation</h3>
<p>Ces traces illustrent l'implémentation de techniques d'optimisation avancées pour un générateur de données en Python. La Trace 2.1 montre comment l'application principale lance la tâche de génération dans un thread séparé, garantissant ainsi la réactivité de l'interface utilisateur (UI). La Trace 2.2 détaille l'algorithme sous-jacent, divisant le travail en plusieurs threads pour accélérer significativement le traitement de grands volumes de données.</p>

<h3>Savoirs mobilisés</h3>
<ul>
    <li>L'efficacité des traitements des données complexes dépend du choix judicieux de structures de données. L'utilisation de bibliothèques comme Pandas et ses Dataframes est une approche efficace pour organiser et manipuler de grands ensembles de données.</li>
    <li>L'optimisation des applications pour des traitements à forte intensité de calcul et la garantie de la réactivité de l'interface utilisateur repose sur l'emploi de techniques algorithmiques avancées, telles que le multithreading et l'utilisation de pools de threads (<code>ThreadPoolExecutor</code>) pour la parallélisation des opérations.</li>
    <li>La sécurisation des données et du code est un enjeu majeur du développement logiciel, impliquant la protection des informations sensibles (par exemple, les mots de passe) et la mise en place de mesures préventives et de tests pour identifier les vulnérabilités.</li>
    <li><em>AC 4 non abordée.</em></li>
</ul>

<h3>Savoir-faire mis en œuvre</h3>
<ul>
    <li>J'ai choisi et utilisé les Dataframes de la bibliothèque Pandas dans un programme Python car largement documenté, fiable et simple d'utilisation. Cette structure m'a permis d'organiser et de manipuler efficacement des jeux de données d'utilisateurs générés avec des attributs complexes et hétérogènes (rôles, période d'embauche, hiérarchie, organisations, métiers, etc.), avant de les exporter dans un format CSV pour une utilisation ultérieure avec le moteur de provisionnement.</li>
    <li>J'ai optimisé un programme Python dédié à la génération d'utilisateurs en y intégrant le multithreading. J'ai conçu la logique pour lancer la tâche de génération dans un thread séparé (<code>threading.Thread</code>) afin de garantir la réactivité de l'interface utilisateur (Trace 2.1). De plus, j'ai structuré le processus de génération en utilisant un pool de threads (<code>concurrent.futures.ThreadPoolExecutor</code>) afin de diviser le travail en plusieurs blocs (chunks) et de les traiter en parallèle (Trace 2.2), ce qui a considérablement amélioré les performances, permettant de générer des centaines de milliers, voire des millions d'utilisateurs avec une grande efficacité.</li>
    <li>J'ai mis en œuvre des mesures pour garantir la sécurisation des données en veillant à ce que les mots de passe soient stockés de manière appropriée et ne soient jamais affichés en clair par le programme. J'ai également renforcé la sécurité des installateurs par l'exécution de nombreux tests de prérequis (environnements .NET, architectures, modules de réécriture d'URL d'IIS) et des tests sur les données, tels que la vérification des comptes de services via des requêtes vers l'AD et la validation des connexions aux bases de données.</li>
    <li><em>Savoir-faire non mis en œuvre.</em></li>
</ul>

<hr>

<h2>Compétence 3 : Administrer des systèmes informatiques communicants complexes</h2>
<p><strong>Détails de la compétence :</strong> Cette compétence se décompose en plusieurs apprentissages critiques (AC) que j'ai pu développer à travers mes projets :</p>
<ul>
    <li><strong>AC 1 :</strong> Développer des applications communicantes.</li>
    <li><strong>AC 2 :</strong> Utiliser la virtualisation.</li>
    <li><strong>AC 3 :</strong> Sécuriser les services et données d'un système.</li>
</ul>

<h3>Trace 3 : Flux de Déploiement et d'Intégration d'Identity</h3>
<img src="/assets/img/trace-3.svg" alt="Diagramme illustrant le déploiement Identity">
<blockquote><strong>Légende :</strong> Architecture et flux de décision de l'installateur Identity pour l'intégration des fournisseurs d'identité.</blockquote>

<h3>Présentation</h3>
<p>Cette trace représente le flux de données entre l'installateur Identity et l'API du fournisseur d'identités. Les données transmises sont sous format JSON puis traitées à l'aide de scripts PowerShell et librairie dédiées.</p>

<h3>Savoirs mobilisés</h3>
<ul>
    <li>Le développement d'applications communicantes exige la compréhension des protocoles d'échange de données (comme le format JSON) et la capacité à interagir avec des services externes via des API pour des flux d'information complexes.</li>
    <li>L'utilisation de machines virtuelles (VMs) pour des environnements de développement, de test et de production sont utiles, notamment lorsqu'il faut créer de nombreuses machines afin d'avoir une maquette multi-machines réalistes avec une base de données décentralisée, un Active Directory (AD) ou encore un contrôleur de domaine.</li>
    <li>La sécurisation des systèmes complexes implique une connaissance approfondie des environnements (AD, IIS), des mécanismes de gestion des certificats, du réseau, et de l'analyse des journaux (logs) pour le diagnostic et la détection d'incidents.</li>
</ul>

<h3>Savoir-faire mis en œuvre</h3>
<ul>
    <li>J'ai développé une fonctionnalité permettant à l'installateur d'envoyer des requêtes à un Identity Provider (IdP) pour récupérer dynamiquement des informations essentielles, telles que des jetons et des points de terminaison, au format JSON. Cela démontre ma capacité à créer des applications interopérables et communicantes. J'ai également étudié en profondeur les architectures des API REST et leur documentation via Swagger.</li>
    <li>J'ai acquis une bonne familiarisation avec l'utilisation des machines virtuelles (VMs) sous Windows Server, un environnement que j'ai utilisé pour le développement, les tests et la validation de l'installateur et des solutions logicielles, démontrant ainsi ma capacité à travailler dans des environnements virtualisés et de les faire fonctionner ensemble.</li>
    <li>J'ai acquis une familiarisation approfondie avec divers environnements Microsoft (AD, Azure, Teams, IIS, PowerShell, certificats, domaines, réseau, observateur d'événements). J'ai également appris à analyser des journaux (logs) Hangfire ou des journaux réseau avancés dans la console pour diagnostiquer et résoudre des problèmes. De plus, j'ai rédigé un article Confluence, documentant la création et l'utilisation de certificats auto-signés avec IIS, ce qui témoigne de ma capacité à mettre en œuvre et à documenter des pratiques de sécurisation.</li>
</ul>

<hr>

<h2>Compétence 4 : Gérer des données de l'information</h2>
<p><strong>Détails de la compétence :</strong> Cette compétence se décompose en plusieurs apprentissages critiques (AC) que j'ai pu développer à travers mes projets :</p>
<ul>
    <li><strong>AC 1 :</strong> Optimiser les modèles de données de l'entreprise.</li>
    <li><strong>AC 2 :</strong> Assurer la confidentialité des données (intégrité et sécurité).</li>
    <li><strong>AC 3 :</strong> Organiser la restitution de données à travers la programmation et la visualisation.</li>
    <li><strong>AC 4 :</strong> Manipuler des données hétérogènes.</li>
</ul>

<h3>Trace 4.1 : Flux de Gestion des Correctifs de l'Installateur</h3>
<img src="/assets/img/trace-4-1.svg" alt="Diagramme illustrant la gestion des correctifs">
<blockquote><strong>Légende :</strong> Fonction d'historisation des correctifs dans la base de données de l'application.</blockquote>

<h3>Savoirs mobilisés</h3>
<ul>
    <li>L'implémentation dans la base de données d'une fonction d'historisation des correctifs permettant d'assurer une cohérence dans ces derniers.</li>
    <li>La garantie de la confidentialité, de l'intégrité et de la sécurité des données est un pilier de la gestion de l'information, exigeant des pratiques de stockage sécurisé des informations sensibles et des validations rigoureuses de leur exactitude.</li>
    <li><em>AC 3 non abordée.</em></li>
    <li>La manipulation et l'intégration de données provenant de sources et de formats divers (par exemple, des données générées, des données de systèmes externes, des fichiers CSV) sont des compétences essentielles pour la préparation et l'analyse de jeux de données complexes.</li>
</ul>

<h3>Savoir-faire mis en œuvre</h3>
<ul>
    <li>J'ai mis en place une fonction d'historisation dans la base de données de l'application. En effet, il est important d'avoir cette fonctionnalité afin que l'installateur puisse appliquer les correctifs correctement (ne pas appliquer ceux antérieurs à la date du plus récent dans la base et dans l'ordre chronologique).</li>
    <li>J'ai mis en place des mesures garantissant la confidentialité des données en assurant que les mots de passe soient stockés de manière sécurisée et ne soient jamais affichés en clair par l'installateur. J'ai également réalisé des tests sur les données, comme la vérification des comptes de services via des requêtes vers l'AD et les tests de connexion aux bases de données, afin de valider leur intégrité et leur sécurité.</li>
    <li><em>Savoir-faire non mis en œuvre.</em></li>
    <li>J'ai conçu et développé un programme en Python, utilisant la bibliothèque Faker, pour générer un grand nombre d'utilisateurs avec des attributs variés et cohérents (rôles, période d'embauche, hiérarchie, organisations, métiers). J'ai ensuite manipulé ces données hétérogènes en les structurant dans des Dataframes Pandas et en les exportant dans des fichiers CSV, pour être utilisés par le moteur de provisionnement, démontrant ma capacité à préparer et à transformer des données pour des systèmes tiers.</li>
</ul>

<hr>

<h2>Compétence 5 : Conduire un projet</h2>
<p><strong>Détails de la compétence :</strong> Cette compétence se décompose en plusieurs apprentissages critiques (AC) que j'ai pu développer à travers mes projets :</p>
<ul>
    <li><strong>AC 2 :</strong> Formaliser les besoins du client et de l'utilisateur.</li>
    <li><strong>AC 3 :</strong> Identifier les critères de faisabilité d'un projet informatique.</li>
    <li><strong>AC 4 :</strong> Définir et mettre en œuvre une démarche de suivi de projet.</li>
</ul>

<h3>Savoirs mobilisés</h3>
<ul>
    <li>La formalisation des besoins des clients et des utilisateurs est une étape cruciale en gestion de projet, nécessitant une écoute active pour capter les exigences initiales et une adaptabilité pour gérer les évolutions.</li>
    <li>La connaissance des méthodes d'estimation de la charge de travail et leur rôle dans l'identification des critères de faisabilité d'un projet informatique (délais, ressources, coûts).</li>
    <li>Un suivi de projet efficace implique l'utilisation d'outils de gestion des tâches et des incidents, une communication transparente sur l'avancement et la capacité à estimer les charges de travail.</li>
</ul>

<h3>Savoir-faire mis en œuvre</h3>
<ul>
    <li>J'ai formalisé les besoins de ma maîtresse d'apprentissage pour la refonte de l'outil d'installation, en prenant en compte les exigences de départ (choix d'une alternative gratuite et open source, fonctionnalités avancées, intégration continue) et en gérant les évolutions de ces exigences (passage d'un installateur simple à un installateur modulaire avec sélection individuelle des produits, implémentation de fonctionnalités liées aux correctifs ou à l'utilisation d'un fournisseur d'identité tiers).</li>
    <li>Lors des réunions quotidiennes (stand-ups), j'ai pu estimer les charges de travail des différentes tâches, contribuant ainsi à l'évaluation continue de la faisabilité du projet et à l'ajustement des tâches prévues.</li>
    <li>J'ai utilisé le système de tickets d'Azure DevOps (incluant la gestion des bogues, des user story et des features) pour le suivi du projet, ce qui m'a permis de développer ma concision et ma précision dans la rédaction des tickets. J'ai également participé activement aux stand-ups quotidiens pour estimer les charges de travail et rendre compte de mon activité, contribuant ainsi à une démarche de suivi de projet structurée.</li>
</ul>

<hr>

<h2>Compétence 6 : Collaborer au sein d'une équipe informatique</h2>
<p><strong>Détails de la compétence :</strong> Cette compétence se décompose en plusieurs apprentissages critiques (AC) que j'ai pu développer à travers mes projets :</p>
<ul>
    <li><strong>AC 2 :</strong> Appliquer une démarche pour intégrer une équipe informatique au sein d'une organisation.</li>
    <li><strong>AC 3 :</strong> Mobiliser les compétences interpersonnelles pour intégrer une équipe informatique.</li>
    <li><strong>AC 4 :</strong> Rendre compte de son activité professionnelle.</li>
</ul>

<h3>Savoirs mobilisés</h3>
<ul>
    <li>L'intégration réussie au sein d'une équipe informatique repose sur la maîtrise des outils collaboratifs et des processus de développement partagés, essentiels pour une contribution efficace.</li>
    <li>Une collaboration efficace au sein d'une équipe est facilitée par des compétences interpersonnelles solides, telles que la communication proactive, la capacité à transmettre des connaissances et à travailler en synergie.</li>
    <li>La reddition de compte est essentielle pour la transparence et le suivi des projets au sein d'une équipe. Elle implique une communication claire, concise et régulière sur l'avancement des tâches et les résultats.</li>
</ul>

<h3>Savoir-faire mis en œuvre</h3>
<ul>
    <li>J'ai appris et appliqué l'utilisation du pull request, un mécanisme clé de collaboration sur le code, ce qui m'a permis de m'intégrer et de contribuer efficacement aux processus de développement de l'équipe.</li>
    <li>J'ai activement communiqué avec les membres de mon équipe, notamment en transmettant les connaissances techniques acquises lors de mes périodes de tests à un collègue qui a intégré l'équipe de validation logicielle, démontrant ma capacité à partager l'information et à favoriser la montée en compétence collective.</li>
    <li>J'ai régulièrement rendu compte de mon activité professionnelle lors des stand-ups quotidiennes, incluant l'estimation des charges de travail. J'ai également contribué à la documentation interne en rédigeant un article Confluence destiné aux équipes, détaillant la création et l'utilisation de certificats auto-signés avec IIS, ce qui démontre ma capacité à documenter et à partager mes travaux. Ma capacité à être concis et précis dans la rédaction des tickets Azure DevOps (bogues, user story, features, etc.) a également amélioré la compréhension mutuelle au sein de l'équipe.</li>
</ul>`,
          link: null,
        },
        P2: {
          TITLE: 'Portfolio Personnel',
          DESC: 'Site vitrine interactif présentant mon parcours, mes compétences et mes projets.',
          FULL_DESC: 'Ce projet est une carte de visite numérique. Il a pour objectif de démontrer mes compétences en développement Web. Technologies : Angular 19, Material, SCSS, TypeScript. Fonctionnalités : Internationalisation (i18n), Thème dynamique (Dark/Light), Animations fluides, Responsive Design et CI/CD avec GitHub Actions.'
        },
        P3: {
          TITLE: 'BIP AI in Robotics',
          DESC: 'Robot autonome avec Navigation Visuelle & Lidar.',
          FULL_DESC: 'Projet de robotique en équipe internationale. Développement d\'un JetBot autonome (Jetson Nano). Implémentation d\'un réseau de neurones (CNN) avec OpenCV pour le suivi de ligne et fusion de données Lidar pour l\'évitement d\'obstacles. Algorithme de contrôle PD.'
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
          PROBLEM_SOLVING: 'Résolution de problèmes',
          ADAPTABILITY: 'Adaptabilité',
          CURIOSITY: 'Curiosité & Veille',
          RIGOR: 'Rigueur',
          COMMUNICATION: 'Communication'
        }
      }
    },
    en: {
      HEADER: {
        HOME: 'Home',
        PROJECTS: 'Projects',
        SKILLS: 'Skills',
        CONTACT: 'Contact',
        CV: 'Resume'
      },
      HOME: {
        HELLO: 'Portfolio of ',
        ROLE: 'BUT Computer Science Apprentice at UMLP / Systancia',
        INTRO: "Apprentice at Marie and Louis Pasteur University and Systancia, I am in my third year of a Bachelor's Degree in Computer Science (BUT). Driven by digital creation and robotics, this portfolio is a showcase of my journey within UMLP and Systancia, as well as a reflection of my technical skills. My goal is to solve problems and understand the world around me, both in computing and in everyday life. Although I aspire to low-level development and established technologies, I continue to keep up to date with the computer world through articles, books, and podcasts.",
        BUTTON: 'See my work',
        EDUCATION_TITLE: 'Education',
        EDUCATION: {
            BUT: {
                TITLE: 'BUT Computer Science',
                SCHOOL: 'IUT Nord Franche-Comté (Belfort) - 2023 / 2026',
                DESC: 'Apprenticeship at Systancia. Application development specialization. Algorithms, programming, system/network architecture, software engineering, and web development.'
            },
            BAC: {
                TITLE: 'General Baccalaureate',
                SCHOOL: 'Lycée Gustave Courbet (Belfort) - 2023',
                DESC: 'Specialization in Mathematics and Computer Science. Mention "Bien" (With Honors).'
            },
            PMM: {
                TITLE: 'Naval Military Preparation',
                SCHOOL: 'PMM Center of Belfort - 2022',
                DESC: 'Military and maritime training. Obtained PSC1 (First Aid Training).'
            }
        }
      },
      CONTACT: {
        TITLE: 'Contact Me',
        SUBTITLE: 'For any questions or proposals',
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
          DESC: 'Development of an internal management application. Challenges: SQL Optimization and Responsive Design.',
          FULL_DESC: `<h1>Semester 3 and 4</h1>

<h2>Competency 1: Application Development</h2>
<p><strong>Competency Details:</strong> This competency breaks down into several critical learning outcomes (CLO) that I developed through my projects:</p>
<ul>
    <li><strong>CLO 1:</strong> Elaborate and implement functional and non-functional specifications from requirements.</li>
    <li><strong>CLO 2:</strong> Apply accessibility and ergonomics principles.</li>
    <li><strong>CLO 3:</strong> Adopt good design and programming practices.</li>
    <li><strong>CLO 4:</strong> Verify and validate application quality through testing.</li>
</ul>

<h3>Trace 1.1: Systancia Solutions Installer Architecture</h3>
<img src="/assets/img/trace-1-1.svg" alt="Diagram illustrating the main Identity installer architecture">
<blockquote><strong>Legend:</strong> Simplified architecture of Inno Setup installers for Systancia Identity related solutions.</blockquote>

<h3>Presentation</h3>
<p>This trace illustrates the architecture of installers developed with Inno Setup, their relationships, and organization. The Federation and Identity Provisioning installers are independent, as are the uninstallers.</p>

<h3>Mobilized Knowledge</h3>
<ul>
    <li>The ability to analyze existing systems and translate client needs into functional and non-functional specifications (such as modularity, robustness, ergonomics, and continuous integration).</li>
    <li>Designing user interfaces (UI) that respect ergonomics and clarity principles is essential to improve user experience and application efficiency, notably through the integration of pre-filled fields and dynamic lists.</li>
    <li>Adopting good practices, including modularity, rigorous error management, handling various use cases (architecture, current installations and configurations, components, etc.), exhaustive logging, and securing sensitive data.</li>
    <li>Verification and validation through tests (functional, acceptance, prerequisites, data) are indispensable steps to guarantee the quality, conformity, and security of an application before deployment.</li>
</ul>

<h3>Implemented Know-How</h3>
<ul>
    <li>I conducted an in-depth analysis of existing software (Identity, Federation, Identity Provisioning) to understand their architecture and functioning, which allowed me to identify redesign requirements. I then formalized the needs, taking into account initial requirements (free alternative, open source, feature-rich, continuously integrable, silent execution) and managing the evolution of these needs (transitioning from a simple installer to a version allowing individual product selection and dynamic information retrieval via requests to the Identity Provider (IdP)). I implemented an installer that meets these specifications, being modular and robust.</li>
    <li>I designed clear and concise interfaces for the installer to optimize its ergonomics. I integrated features such as pre-filled fields and dynamically populated lists (e.g., with available certificates and machine certificate stores), thus facilitating interaction and reducing errors for the end user.</li>
    <li>I developed the installer by applying modular and robust design principles, notably using PowerShell for the underlying logic. I implemented error management mechanisms (<code>try-catch</code> blocks and return codes) and complete process logging to ensure reliability. I also ensured data security by ensuring passwords are stored correctly and never displayed in clear text. I studied REST API architectures and their documentation using Swagger.</li>
    <li>I implemented a rigorous testing strategy to validate the installer's quality. I performed numerous prerequisite tests (checking .NET environment, architecture, IIS URL rewrite module) and data tests (service account verification via AD requests, database connection tests, etc.) to reinforce security.
        <ul>
            <li>To understand the functioning and architectures of the various applications, I first started by performing acceptance tests, which allowed me to learn to understand the stakes and importance of software validation within a development team. I learned to use various tools to perform my tests such as the Event Viewer, the browser console and network analysis, or logs generated by Hangfire.</li>
        </ul>
    </li>
</ul>

<hr>

<h2>Competency 2: Optimize Applications</h2>
<p><strong>Competency Details:</strong> This competency breaks down into several critical learning outcomes (CLO) that I developed through my projects:</p>
<ul>
    <li><strong>CLO 1:</strong> Choose complex data structures adapted to the problem.</li>
    <li><strong>CLO 2:</strong> Use algorithmic techniques adapted to the problem.</li>
    <li><strong>CLO 3:</strong> Understand the stakes and means of securing data and code.</li>
    <li><strong>CLO 4:</strong> Evaluate the environmental and societal impact of proposed solutions.</li>
</ul>

<h3>Traces</h3>
<ol>
    <li><strong>Trace 2.1:</strong> <img src="/assets/img/c2-1.png" alt="Python code screenshot illustrating multithreading optimization">
        <ul>
            <li><em>Legend:</em> Python code extract illustrating the use of multithreading to avoid blocking the GUI.</li>
        </ul>
    </li>
    <li><strong>Trace 2.2:</strong> <img src="/assets/img/c2-2.png" alt="Python code screenshot illustrating multithreading optimization">
        <ul>
            <li><em>Legend:</em> Python code extract illustrating the use of multithreading for optimized data generation.</li>
        </ul>
    </li>
</ol>

<h3>Presentation</h3>
<p>These traces illustrate the implementation of advanced optimization techniques for a data generator in Python. Trace 2.1 shows how the main application launches the generation task in a separate thread, thus guaranteeing the User Interface (UI) responsiveness. Trace 2.2 details the underlying algorithm, dividing the work into several threads to significantly speed up the processing of large data volumes.</p>

<h3>Mobilized Knowledge</h3>
<ul>
    <li>The efficiency of complex data processing depends on the judicious choice of data structures. Using libraries like Pandas and its Dataframes is an effective approach to organize and manipulate large datasets.</li>
    <li>Optimizing applications for computationally intensive treatments and guaranteeing UI responsiveness relies on the use of advanced algorithmic techniques, such as multithreading and the use of thread pools (<code>ThreadPoolExecutor</code>) for operation parallelization.</li>
    <li>Securing data and code is a major stake in software development, implying the protection of sensitive information (e.g., passwords) and the implementation of preventive measures and tests to identify vulnerabilities.</li>
    <li><em>CLO 4 not addressed.</em></li>
</ul>

<h3>Implemented Know-How</h3>
<ul>
    <li>I chose and used Pandas Dataframes in a Python program because it is widely documented, reliable, and simple to use. This structure allowed me to effectively organize and manipulate generated user datasets with complex and heterogeneous attributes (roles, hiring period, hierarchy, organizations, jobs, etc.) before exporting them in CSV format for later use with the provisioning engine.</li>
    <li>I optimized a Python program dedicated to user generation by integrating multithreading. I designed the logic to launch the generation task in a separate thread (<code>threading.Thread</code>) to guarantee UI responsiveness (Trace 2.1). Furthermore, I structured the generation process using a thread pool (<code>concurrent.futures.ThreadPoolExecutor</code>) to divide the work into several chunks and process them in parallel (Trace 2.2), which considerably improved performance, allowing the generation of hundreds of thousands, or even millions of users with high efficiency.</li>
    <li>I implemented measures to guarantee data security by ensuring passwords are stored appropriately and never displayed in clear text by the program. I also reinforced installer security by executing numerous prerequisite tests (.NET environments, architectures, IIS URL rewrite modules) and data tests, such as service account verification via AD requests and database connection validation.</li>
    <li><em>Know-how not implemented.</em></li>
</ul>

<hr>

<h2>Competency 3: Administer Complex Communicating IT Systems</h2>
<p><strong>Competency Details:</strong> This competency breaks down into several critical learning outcomes (CLO) that I developed through my projects:</p>
<ul>
    <li><strong>CLO 1:</strong> Develop communicating applications.</li>
    <li><strong>CLO 2:</strong> Use virtualization.</li>
    <li><strong>CLO 3:</strong> Secure system services and data.</li>
</ul>

<h3>Trace 3: Deployment and Identity Integration Flow</h3>
<img src="/assets/img/trace-3.svg" alt="Diagram illustrating how the Identity installer manages Federation deployment or configuration with an external IdP">
<blockquote><strong>Legend:</strong> Architecture and decision flow of the Identity installer for identity provider integration.</blockquote>

<h3>Presentation</h3>
<p>This trace represents the data flow between the Identity installer and the Identity Provider API. Transmitted data is in JSON format and then processed using PowerShell scripts and dedicated libraries.</p>

<h3>Mobilized Knowledge</h3>
<ul>
    <li>Developing communicating applications requires understanding data exchange protocols (like JSON format) and the ability to interact with external services via APIs for complex information flows.</li>
    <li>Using virtual machines (VMs) for development, test, and production environments is useful, especially when it is necessary to create many machines to have a realistic multi-machine mockup with a decentralized database, an Active Directory (AD), or a domain controller.</li>
    <li>Securing complex systems implies in-depth knowledge of environments (AD, IIS), certificate management mechanisms, network, and log analysis for diagnosis and incident detection.</li>
</ul>

<h3>Implemented Know-How</h3>
<ul>
    <li>I developed a feature allowing the installer to send requests to an Identity Provider (IdP) to dynamically retrieve essential information, such as tokens and endpoints, in JSON format. This demonstrates my ability to create interoperable and communicating applications. I also studied REST API architectures and their documentation via Swagger in depth.</li>
    <li>I acquired good familiarity with using virtual machines (VMs) under Windows Server, an environment I used for development, testing, and validation of the installer and software solutions, thus demonstrating my ability to work in virtualized environments and make them work together.</li>
    <li>I acquired in-depth familiarity with various Microsoft environments (AD, Azure, Teams, IIS, PowerShell, certificates, domains, network, Event Viewer). I also learned to analyze Hangfire logs or advanced network logs in the console to diagnose and resolve problems. Furthermore, I wrote a Confluence article documenting the creation and use of self-signed certificates with IIS, which testifies to my ability to implement and document security practices.</li>
</ul>

<hr>

<h2>Competency 4: Manage Information Data</h2>
<p><strong>Competency Details:</strong> This competency breaks down into several critical learning outcomes (CLO) that I developed through my projects:</p>
<ul>
    <li><strong>CLO 1:</strong> Optimize enterprise data models.</li>
    <li><strong>CLO 2:</strong> Ensure data confidentiality (integrity and security).</li>
    <li><strong>CLO 3:</strong> Organize data restitution through programming and visualization.</li>
    <li><strong>CLO 4:</strong> Manipulate heterogeneous data.</li>
</ul>

<h3>Trace 4.1: Installer Patch Management Flow</h3>
<img src="/assets/img/trace-4-1.svg" alt="Diagram illustrating the process by which the installer communicates with the database to retrieve patch history">
<blockquote><strong>Legend:</strong> Patch historization function in the application database.</blockquote>

<h3>Mobilized Knowledge</h3>
<ul>
    <li>Implementation in the database of a patch historization function to ensure consistency in them.</li>
    <li>Guaranteeing data confidentiality, integrity, and security is a pillar of information management, requiring secure storage practices for sensitive information and rigorous validations of their accuracy.</li>
    <li><em>CLO 3 not addressed.</em></li>
    <li>Manipulation and integration of data coming from diverse sources and formats (e.g., generated data, external system data, CSV files) are essential skills for preparing and analyzing complex datasets.</li>
</ul>

<h3>Implemented Know-How</h3>
<ul>
    <li>I set up a historization function in the application database. Indeed, it is important to have this feature so that the installer can apply patches correctly (not applying those prior to the most recent date in the database and in chronological order).</li>
    <li>I implemented measures guaranteeing data confidentiality by ensuring passwords are stored securely and never displayed in clear text by the installer. I also performed data tests, such as service account verification via AD requests and database connection tests, to validate their integrity and security.</li>
    <li><em>Know-how not implemented.</em></li>
    <li>I designed and developed a Python program, using the Faker library, to generate a large number of users with varied and consistent attributes (roles, hiring period, hierarchy, organizations, jobs). I then manipulated this heterogeneous data by structuring it in Pandas Dataframes and exporting it to CSV files, to be used by the provisioning engine, demonstrating my ability to prepare and transform data for third-party systems.</li>
</ul>

<hr>

<h2>Competency 5: Project Management</h2>
<p><strong>Competency Details:</strong> This competency breaks down into several critical learning outcomes (CLO) that I developed through my projects:</p>
<ul>
    <li><strong>CLO 2:</strong> Formalize client and user needs.</li>
    <li><strong>CLO 3:</strong> Identify feasibility criteria for an IT project.</li>
    <li><strong>CLO 4:</strong> Define and implement a project monitoring approach.</li>
</ul>

<h3>Mobilized Knowledge</h3>
<ul>
    <li>Formalizing client and user needs is a crucial step in project management, requiring active listening to capture initial requirements and adaptability to manage evolutions.</li>
    <li>Knowledge of workload estimation methods and their role in identifying IT project feasibility criteria (deadlines, resources, costs).</li>
    <li>Effective project monitoring implies using task and incident management tools, transparent communication on progress, and the ability to estimate workloads.</li>
</ul>

<h3>Implemented Know-How</h3>
<ul>
    <li>I formalized my apprenticeship supervisor's needs for the installer tool redesign, taking into account initial requirements (choice of a free and open-source alternative, advanced features, continuous integration) and managing the evolutions of these requirements (transition from a simple installer to a modular installer with individual product selection, implementation of features related to patches or using a third-party identity provider).</li>
    <li>During daily meetings (stand-ups), I was able to estimate the workloads of different tasks, thus contributing to the continuous evaluation of project feasibility and the adjustment of planned tasks.</li>
    <li>I used the Azure DevOps ticket system (including bug management, user stories, and features) for project monitoring, which allowed me to develop my conciseness and precision in ticket writing. I also actively participated in daily stand-ups to estimate workloads and report on my activity, thus contributing to a structured project monitoring approach.</li>
</ul>

<hr>

<h2>Competency 6: Collaborate within an IT Team</h2>
<p><strong>Competency Details:</strong> This competency breaks down into several critical learning outcomes (CLO) that I developed through my projects:</p>
<ul>
    <li><strong>CLO 2:</strong> Apply an approach to integrate an IT team within an organization.</li>
    <li><strong>CLO 3:</strong> Mobilize interpersonal skills to integrate an IT team.</li>
    <li><strong>CLO 4:</strong> Report on professional activity.</li>
</ul>

<h3>Mobilized Knowledge</h3>
<ul>
    <li>Successful integration within an IT team relies on mastering collaborative tools and shared development processes, essential for effective contribution.</li>
    <li>Effective collaboration within a team is facilitated by solid interpersonal skills, such as proactive communication, the ability to transfer knowledge, and working in synergy.</li>
    <li>Accountability is essential for transparency and project monitoring within a team. It implies clear, concise, and regular communication on task progress and results.</li>
</ul>

<h3>Implemented Know-How</h3>
<ul>
    <li>I learned and applied the use of pull requests, a key mechanism for code collaboration, which allowed me to integrate and contribute effectively to the team's development processes.</li>
    <li>I actively communicated with my team members, notably by transmitting technical knowledge acquired during my testing periods to a colleague who joined the software validation team, demonstrating my ability to share information and foster collective skill improvement.</li>
    <li>I regularly reported on my professional activity during daily stand-ups, including workload estimation. I also contributed to internal documentation by writing a Confluence article intended for teams, detailing the creation and use of self-signed certificates with IIS, which demonstrates my ability to document and share my work. My ability to be concise and precise in writing Azure DevOps tickets (bugs, user stories, features, etc.) also improved mutual understanding within the team.</li>
</ul>`,
          link: null,
        },
        P2: {
          TITLE: 'Personal Portfolio',
          DESC: 'Interactive showcase site presenting my background, my skills, and my projects.',
          FULL_DESC: 'This project is a digital business card. Its goal is to demonstrate my Web development skills. Technologies: Angular 19, Material, SCSS, TypeScript. Features: Internationalization (i18n), Dynamic Theme (Dark/Light), Smooth Animations, Responsive Design, and CI/CD with GitHub Actions.'
        },
        P3: {
          TITLE: 'BIP AI in Robotics',
          DESC: 'Autonomous Robot with Visual Navigation & Lidar.',
          FULL_DESC: 'International robotics team project. Development of an autonomous JetBot (Jetson Nano). Implementation of a Neural Network (CNN) with OpenCV for line following and Lidar data fusion for obstacle avoidance. PD Control algorithm.'
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
          PROBLEM_SOLVING: 'Problem Solving',
          ADAPTABILITY: 'Adaptability',
          CURIOSITY: 'Curiosity & Tech Watch',
          RIGOR: 'Rigor',
          COMMUNICATION: 'Communication'
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
