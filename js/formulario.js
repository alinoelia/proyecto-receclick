document.addEventListener('DOMContentLoaded', function() {
    // Captura los parámetros de la URL
    const params = new URLSearchParams(window.location.search);
    const nombreProducto = params.get('nombre');
    const precioProducto = params.get('precio');

    // Asigna los valores a los campos del formulario
    if (nombreProducto && precioProducto) {
        document.getElementById('nombre-producto').value = nombreProducto;
        document.getElementById('precio-producto').value = `$${precioProducto}`;
    } else {
        // Si no hay parámetros, muestra un mensaje de error o asigna valores predeterminados
        document.getElementById('nombre-producto').value = 'Producto no disponible';
        document.getElementById('precio-producto').value = '$0';
    }
});