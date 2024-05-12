document.addEventListener("DOMContentLoaded", function() { // Espera a que el DOM esté completamente cargado antes de ejecutar el código
    const slides = document.querySelectorAll(".slide"); // Elementos de imagen del carrusel
    const texts = document.querySelectorAll(".text-slide"); // Elementos de texto del carrusel
  
    let currentIndex = 0; // Inicializa el índice de la diapositiva actual
  
    function showSlide(index) {  // Función para mostrar una diapositiva específica
      slides.forEach((slide, i) => { // Oculta todas las diapositivas y textos
        if (i === index) { // Muestra la imagen actual, oculta las otras imágenes
          slide.style.transform = "translateY(0)"; // Muestra la imagen actual
        } else {
          slide.style.transform = "translateY(150%)"; // Oculta las otras imágenes
        }
      });
      texts.forEach((text, i) => { // Muestra el texto actual, oculta los otros textos
        if (i === index) {
          text.style.transform = "translateY(0)"; // Muestra el texto actual
        } else {
          text.style.transform = "translateY(-100%)";// Oculta los otros textos
        }
      });
    }
  
    function nextSlide() { // Función para avanzar a la siguiente diapositiva
      currentIndex++; // Incrementa el índice de la diapositiva actual
      if (currentIndex >= slides.length) { // Si el índice supera el número de diapositivas, vuelve al principio
        currentIndex = 0;
      }
      showSlide(currentIndex);  // Muestra la siguiente diapositiva
    }
  
    showSlide(currentIndex); // Muestra la primera diapositiva al cargar la página
  
    setInterval(nextSlide, 4000); // Cambia de slide cada 4 segundos
  });
  