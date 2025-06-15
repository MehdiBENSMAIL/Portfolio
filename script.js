document.addEventListener('DOMContentLoaded', () => {

    // --- Theme Switch Functionality ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Load saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.checked = true;
    } else {
         body.classList.remove('dark-mode');
         themeToggle.checked = false; // Ensure checkbox matches state
    }

    // Toggle theme on switch change
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });


    // --- Scroll Progress Bar ---
    const scrollProgress = document.getElementById('scroll-progress');

    const updateScrollProgress = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.body.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollPercent = (scrollTop / (docHeight - windowHeight)) * 100;

        if (scrollPercent > 100) { // Handle potential overflow issues
             scrollProgress.style.width = '100%';
        } else if (scrollPercent >= 0) {
             scrollProgress.style.width = scrollPercent + '%';
        } else {
             scrollProgress.style.width = '0%'; // If at the very top
        }
    };

    window.addEventListener('scroll', updateScrollProgress);
    // Initial call to set progress on page load (important if page is scrolled by default)
    updateScrollProgress();


    // --- Back to Top Button (Global) ---
    const backToTopButton = document.getElementById('back-to-top');
    const backToTopThreshold = 300; // Pixels scrolled before button appears

    const toggleBackToTopButton = () => {
        if (window.scrollY > backToTopThreshold) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    };

    window.addEventListener('scroll', toggleBackToTopButton);
    // Initial call
    toggleBackToTopButton();

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // --- Drawer Menu ---
    const drawerToggle = document.querySelector('.drawer-toggle');
    const drawerMenu = document.getElementById('drawer-menu');
    const drawerClose = document.querySelector('.drawer-close');
    const overlay = document.querySelector('.overlay');

    const openDrawer = () => {
        drawerMenu.classList.add('open');
        overlay.classList.add('active');
        body.style.overflow = 'hidden'; // Prevent scrolling when drawer is open
    };

    const closeDrawer = () => {
        drawerMenu.classList.remove('open');
        overlay.classList.remove('active');
         body.style.overflow = ''; // Restore scrolling
         // Also close any open dropdowns when closing the drawer
         document.querySelectorAll('.drawer-dropdown.open').forEach(dropdown => {
             dropdown.classList.remove('open');
         });
          document.querySelectorAll('.drawer-dropdown-toggle.active').forEach(toggle => {
             toggle.classList.remove('active');
         });
    };

    drawerToggle.addEventListener('click', openDrawer);
    drawerClose.addEventListener('click', closeDrawer);
    overlay.addEventListener('click', closeDrawer); // Close drawer when clicking overlay

    // Close drawer if a menu item is clicked (optional, you might want to keep it open)
    // drawerMenu.querySelectorAll('a').forEach(link => {
    //     link.addEventListener('click', closeDrawer);
    // });

    // Drawer Dropdown functionality
    const dropdownToggle = document.querySelector('.drawer-dropdown-toggle > a'); // Select the link itself
    const dropdownMenu = document.querySelector('.drawer-dropdown');
    const dropdownParentLi = document.querySelector('.drawer-dropdown-toggle'); // Select the parent li

     if (dropdownToggle && dropdownMenu && dropdownParentLi) {
         dropdownToggle.addEventListener('click', (e) => {
             e.preventDefault(); // Prevent the default link behavior
             dropdownMenu.classList.toggle('open');
             dropdownParentLi.classList.toggle('active'); // For arrow rotation
         });
     }


    // --- Project Card Expansion (Semester Pages) ---
    const projectCards = document.querySelectorAll('.project-card');
    let currentExpandedCard = null; // To keep track of the currently expanded card

    projectCards.forEach(card => {
        // Sélectionne le bouton spécifique à cette carte
        const cardBackToTopButton = card.querySelector('.card-back-to-top');
        let currentCardScrollListener = null; // Pour stocker et retirer l'écouteur de défilement

        card.addEventListener('click', () => {
            // Si une carte est déjà ouverte et que ce n'est pas la carte actuelle, fermez-la
            if (currentExpandedCard && currentExpandedCard !== card) {
                currentExpandedCard.classList.remove('expanded');
                overlay.classList.remove('active'); // Assurez-vous que l'overlay est bien géré

                // Cache le bouton "retour en haut" de la carte précédemment ouverte et retire son écouteur
                const prevCardButton = currentExpandedCard.querySelector('.card-back-to-top');
                if (prevCardButton) {
                    prevCardButton.style.display = 'none';
                }
                if (currentExpandedCard._cardScrollListener) {
                    currentExpandedCard.removeEventListener('scroll', currentExpandedCard._cardScrollListener);
                    currentExpandedCard._cardScrollListener = null;
                }
            }

            // Bascule l'état d'expansion de la carte cliquée
            card.classList.toggle('expanded');

            // Gère la visibilité de l'overlay et le défilement du body
            if (card.classList.contains('expanded')) {
                overlay.classList.add('active');
                body.classList.add('modal-open');
                currentExpandedCard = card;
                body.style.overflow = 'hidden'; // Empêche le défilement du body

                // --- LOGIQUE POUR LE NOUVEAU BOUTON "RETOUR EN HAUT" DE LA CARTE ---
                if (cardBackToTopButton) {
                    // Fonction pour basculer la visibilité du bouton basé sur le défilement de la carte
                    const toggleCardBackToTop = () => {
                        // Affiche le bouton si la carte est scrollée d'au moins 100px
                        if (card.scrollTop > 100) {
                            cardBackToTopButton.style.display = 'block';
                        } else {
                            cardBackToTopButton.style.display = 'none';
                        }
                    };

                    // Vérification initiale lors de l'ouverture de la carte
                    toggleCardBackToTop();

                    // Attache l'écouteur de défilement à la CARTE elle-même
                    card.addEventListener('scroll', toggleCardBackToTop);
                    currentCardScrollListener = toggleCardBackToTop; // Stocke l'écouteur pour le retirer plus tard
                    card._cardScrollListener = currentCardScrollListener; // Utile pour le cleanup global

                    // Ajoute l'écouteur de clic au bouton de la carte
                    cardBackToTopButton.addEventListener('click', (e) => {
                        e.stopPropagation(); // Empêche le clic de se propager à la carte et de la refermer
                        card.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                    });
                }

            } else { // La carte est en train d'être fermée
                overlay.classList.remove('active');
                body.classList.remove('modal-open');
                currentExpandedCard = null;
                body.style.overflow = ''; // Restaure le défilement du body

                // --- NETTOYAGE DU NOUVEAU BOUTON "RETOUR EN HAUT" DE LA CARTE ---
                if (cardBackToTopButton) {
                    cardBackToTopButton.style.display = 'none';
                }
                // Retire l'écouteur de défilement de la carte si elle est fermée
                if (currentCardScrollListener) {
                    card.removeEventListener('scroll', currentCardScrollListener);
                    currentCardScrollListener = null;
                    card._cardScrollListener = null;
                }
            }
        });
    });

    // Ferme la carte étendue (et le tiroir) lors du clic sur l'overlay
    overlay.addEventListener('click', () => {
        if (currentExpandedCard) {
            currentExpandedCard.classList.remove('expanded');
            overlay.classList.remove('active');
            body.classList.remove('modal-open');

            // Cache le bouton "retour en haut" de la carte si elle est fermée via l'overlay
            const cardBackToTopButton = currentExpandedCard.querySelector('.card-back-to-top');
            if (cardBackToTopButton) {
                cardBackToTopButton.style.display = 'none';
            }
            // Retire l'écouteur de défilement de la carte
            if (currentExpandedCard._cardScrollListener) {
                currentExpandedCard.removeEventListener('scroll', currentExpandedCard._cardScrollListener);
                currentExpandedCard._cardScrollListener = null;
            }

            currentExpandedCard = null;
            body.style.overflow = ''; // Restaure le défilement du body
        }
         // Note: L'écouteur de l'overlay gère aussi la fermeture du tiroir.
    });

     // Empêche les clics *à l'intérieur* du contenu de la carte étendue de fermer le modal.
     // Ceci est déjà géré par e.stopPropagation() sur le bouton dupliqué.
     // Pour les autres clics à l'intérieur de la carte, ils ne devraient pas fermer le modal car l'event listener est sur la carte elle-même.
});