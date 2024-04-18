// Script para el desplazamiento suave al hacer clic en los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const categorias = document.querySelectorAll('.categoria');
    categorias.forEach(categoria => {
        categoria.addEventListener('click', () => {
            const categoriaSeleccionada = categoria.getAttribute('data-category');
            const productos = document.querySelectorAll('.producto');
            productos.forEach(producto => {
                if (producto.classList.contains(categoriaSeleccionada)) {
                    producto.style.display = 'block';
                } else {
                    producto.style.display = 'none';
                }
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const productos = document.querySelectorAll('.producto');
    productos.forEach(producto => {
        if (!producto.classList.contains('disolvente')) {
            producto.style.display = 'none';
        }
    });
});