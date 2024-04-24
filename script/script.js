
// Script para el desplazamiento suave al hacer clic en los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


//QUIENES SOMOS 
function toggleAcordeon(id) {
    var contenido = document.getElementById(id + "-contenido");
    var acordeones = document.getElementsByClassName("acordeon-contenido");
    for (var i = 0; i < acordeones.length; i++) {
        if (acordeones[i] !== contenido) {
            acordeones[i].style.display = "none";
        }
    }
    contenido.style.display = contenido.style.display === "block" ? "none" : "block";
}


//PRODUCTOS
document.addEventListener('DOMContentLoaded', function() {
    const categorias = document.querySelectorAll('.categoria');
    categorias.forEach(categoria => {
        categoria.addEventListener('click', () => {
            // Eliminar la clase 'selected' de todas las categorías
            categorias.forEach(c => c.classList.remove('selected'));
            
            // Agregar la clase 'selected' solo a la categoría clicada
            categoria.classList.add('selected');
        });
    });
});






//MODAL GALERIA
var imagenes = document.querySelectorAll(".recuadro img");
var modal = document.getElementById("modalImagen");
var imagenAmpliada = document.getElementById("imagenAmpliada");
var currentIndex = 0;

window.addEventListener('load', function() {
    imagenes.forEach(function(img) {
        img.classList.add('loaded');
    });
});

/// Función para mostrar el lightbox con la imagen ampliada
function mostrarImagen(index) {
    currentIndex = index;
    imagenAmpliada.src = imagenes[index].src;
    modal.style.display = "block";
}

// Función para cerrar el modal de la imagen
function cerrarModalImagen() {
    modal.style.display = "none";
}

// Función para mostrar la siguiente imagen en el lightbox
function siguienteImagen() {
    currentIndex++;
    if (currentIndex >= imagenes.length) {
        currentIndex = 0;
    }
    imagenAmpliada.src = imagenes[currentIndex].src;
}

// Función para mostrar la imagen anterior en el lightbox
function anteriorImagen() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imagenes.length - 1;
    }
    imagenAmpliada.src = imagenes[currentIndex].src;
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

