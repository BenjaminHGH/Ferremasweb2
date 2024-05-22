function toggleMenu() {
    var menuBox = document.getElementById('menuBox');
    menuBox.classList.toggle('mostrar');
}

function toggleSubmenu(id) {
    var submenu = document.getElementById(id);
    submenu.classList.toggle('mostrar');
}
/*pag*/ 
// Array para almacenar los productos en el carrito
let carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(nombre, precio) {
    const producto = {
        nombre: nombre,
        precio: precio
    };
    carrito.push(producto);
    mostrarCarrito();
}

// Función para mostrar los productos en el carrito
// Función para mostrar los productos en el carrito
function mostrarCarrito() {
    const contenedorCarrito = document.getElementById('carrito');
    contenedorCarrito.innerHTML = ''; // Limpiar el contenido anterior del carrito

    // Obtener el carrito desde LocalStorage
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    carrito.forEach(producto => {
        const item = document.createElement('div');
        item.innerHTML = `${producto.nombre} - Precio: $${producto.precio}`;
        contenedorCarrito.appendChild(item);
    });
}

// Función para vaciar el carrito
function vaciarCarrito() {
    carrito = [];
    mostrarCarrito();
}