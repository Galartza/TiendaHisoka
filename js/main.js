const abrirMenu = document.querySelector('.abrir');
const cerrarMenu = document.querySelector('.icon-close-menu-movile');
const containerMenuMobile = document.querySelector('.container-menu-movile');
const overlay = document.querySelector('.overlay');

abrirMenu.addEventListener('click', () => {
    containerMenuMobile.classList.add('menu-visible');
    overlay.style.display = 'block'; // Muestra la capa de superposición
});

cerrarMenu.addEventListener('click', () => {
    containerMenuMobile.classList.remove('menu-visible');
    overlay.style.display = 'none'; // Oculta la capa de superposición
});
// // Obtener elementos del DOM
// const productoSeccion = document.getElementById('producto');

// // Funcion para crear una card de producto
// function crearCardProducto(producto) {
//     const card = document.createElement('div');
//     card.className = 'card-productos';

//     const image = document.createElement('img');
//     image.className = 'img-cards-producto';
//     image.src = producto.imagen;
//     image.alt = producto.nombre;

//     const productoNombre = document.createElement ('h4');
//     productoNombre.textContent = producto.nombre;
//     productoNombre.className = 'nombre-producto';

//     const productoPrecio = document.createElement('p');
//     productoPrecio.textContent = `Precio: $${producto.precio}`;
//     productoPrecio.className = 'precio-producto';

//     const agregarAlCarritoButton = document.createElement('button');
//     agregarAlCarritoButton.className = 'agregar-al-carrito btn-producto';
//     agregarAlCarritoButton.textContent = 'Agregar al carrito';

//     card.appendChild(image);
//     card.appendChild(productoNombre);
//     card.appendChild(productoPrecio);
//     card.appendChild(agregarAlCarritoButton);

//     return card;
// }

// // Generar y agregar las cards de productos al DOM
// productos.forEach(producto => {
//     const productoCard = crearCardProducto(producto);
//     productoSeccion.appendChild(productoCard);
// });
