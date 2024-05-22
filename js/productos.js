function toggleMenu() {
    var menuBox = document.getElementById('menuBox');
    menuBox.classList.toggle('mostrar');
}

function toggleSubmenu(id) {
    var submenu = document.getElementById(id);
    submenu.classList.toggle('mostrar');
}
/**/

function agregarAlCarrito(nombre, precio) {
    const producto = {
        nombre: nombre,
        precio: precio
    };
    carrito.push(producto);
    
    // Guardar el carrito actualizado en LocalStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
}