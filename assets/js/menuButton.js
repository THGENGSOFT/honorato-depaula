// assets/js/menuButton.js
const menuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.getElementById('nav-links');

// Abre e fecha o menu no ícone
menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Recolhe o menu automaticamente ao clicar em um link (crucial para landing pages)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});