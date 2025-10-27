
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('nav.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // animação do hambúrguer em X
        hamburger.classList.toggle('open');
    });
