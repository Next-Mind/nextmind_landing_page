
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // animação do hambúrguer em X
    hamburger.classList.toggle('open');
});

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.1 // 10% do elemento visível
    });

    elements.forEach(el => observer.observe(el));
});

