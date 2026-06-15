// assets/js/stickyScroll.js
const nav = document.querySelector(".nav-bar");

window.addEventListener("scroll", () => {
    // Quando passar de 50px de rolagem, adiciona a classe sticky
    if (window.scrollY > 50) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
});