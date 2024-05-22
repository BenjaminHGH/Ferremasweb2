
function toggleMenu() {
    var menuBox = document.getElementById('menuBox');
    menuBox.classList.toggle('mostrar');
}

function toggleSubmenu(id) {
    var submenu = document.getElementById(id);
    submenu.classList.toggle('mostrar');
}