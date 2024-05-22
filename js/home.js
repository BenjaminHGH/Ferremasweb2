
function toggleMenu() {
    var menuBox = document.getElementById('menuBox');
    menuBox.classList.toggle('mostrar');
}

function toggleSubmenu(id) {
    var submenu = document.getElementById(id);
    submenu.classList.toggle('mostrar');
}

/*distruibidores*/
let slideIndex = 0;

function moveSlide(n) {
    const slides = document.querySelector('.slides');
    const distributors = document.querySelectorAll('.distribuidor');
    const totalSlides = distributors.length;

    slideIndex += n;

    if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    } else if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }

    slides.style.transform = `translateX(${-slideIndex * 100}%)`;
} 