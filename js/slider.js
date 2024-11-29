let slideIndex = 1;
let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("indicator-line");

// Función para mostrar la diapositiva actual
function showSlide(n) {
    // Asegúrate de que el índice esté dentro del rango
    if (n > slides.length) {
        slideIndex = 1; // Si estamos en la última imagen, volvemos a la primera
    }
    if (n < 1) {
        slideIndex = slides.length; // Si estamos en la primera, volvemos a la última
    }

    // Mueve el slider usando transform
    let slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${(slideIndex - 1) * 100}%)`;  // Mover el slider

    // Actualiza la clase activa en los puntos
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    dots[slideIndex - 1].classList.add("active");
}

// Función para mover el slider con las flechas
function moveSlide(n) {
    slideIndex += n;
    showSlide(slideIndex);
}

// Cambiar la imagen cada 10 segundos automáticamente
setInterval(function() {
    moveSlide(1);
}, 10000);  // 10000 ms = 10 segundos

// Función para hacer que los puntos se usen como indicadores de las imágenes
function currentSlide(n) {
    slideIndex = n;
    showSlide(slideIndex);
}

// Inicializa el slider al cargar
showSlide(slideIndex);



