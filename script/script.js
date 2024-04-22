
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

//MODAL GALERIA

var imagenes = document.querySelectorAll(".recuadro img");
var modal = document.getElementById("modalImagen");
var imagenAmpliada = document.getElementById("imagenAmpliada");
var currentIndex = 0;

function mostrarImagen(index) {
    currentIndex = index;
    imagenAmpliada.src = imagenes[index].src;
    modal.style.display = "block";
}

function cerrarModalImagen() {
    modal.style.display = "none";
}

function siguienteImagen() {
    currentIndex++;
    if (currentIndex >= imagenes.length) {
        currentIndex = 0;
    }
    imagenAmpliada.src = imagenes[currentIndex].src;
}

function anteriorImagen() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imagenes.length - 1;
    }
    imagenAmpliada.src = imagenes[currentIndex].src;
}

// Cerrar modal al hacer clic fuera de la imagen
window.onclick = function(event) {
    if (event.target == modal) {
        cerrarModalImagen();
    }
}


//MODAL CONTACTO

function modalContacto() {
    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var asunto = document.getElementById("Asunto").value;
    var mensaje = document.getElementById("mensaje").value;

    // Mostrar los valores en el modal de confirmación
    document.getElementById("confirmNombre").textContent = nombre;
    document.getElementById("confirmEmail").textContent = email;
    document.getElementById("confirmAsunto").textContent = asunto;
    document.getElementById("confirmMensaje").textContent = mensaje;

    // Mostrar el modal solo si al menos un campo está lleno
    if (nombre || email || asunto || mensaje) {
        document.getElementById("myModal").style.display = "block";
    }
}

function cerrarModal() {
    // Cerrar el modal
    document.getElementById("myModal").style.display = "none";
}

function enviarFormulario() {
    // Limpiar los campos del formulario
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("Asunto").value = "";
    document.getElementById("mensaje").value = "";
    
    // Cerrar el modal
    cerrarModal();
}

