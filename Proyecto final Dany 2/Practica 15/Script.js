document.addEventListener("DOMContentLoaded", function() {  // Se ejecuta cuando el DOM ha sido completamente cargado
  const path = document.querySelector(".path"); // Selecciona el elemento con la clase "path"
  const object = document.querySelector(".object"); // Selecciona el elemento con la clase "object"

  const pathLength = path.getTotalLength(); // Obtiene la longitud total del camino

  object.style.transitionDuration = pathLength + "ms";   // Se establece la duración de la transición del objeto 
  //para que coincida con la longitud del camino

  const moveObject = () => { // Función para mover el objeto a lo largo del camino de forma aleatoria
    // Genera una posición aleatoria a lo largo del camino
    const randomPosition = Math.random() * pathLength;

    const point = path.getPointAtLength(randomPosition); // Obtiene las coordenadas (x, y) del punto en el camino en la posición aleatoria
    const x = point.x; //Cordenada x
    const y = point.y; //Cordenada y

    object.style.left = x + "px";  // Establece las coordenadas del objeto para moverlo al punto calculado
    object.style.top = y + "px";

    setTimeout(moveObject, 2000); // Programa el siguiente movimiento del objeto después de 2000 milisegundos
  };
  moveObject(); 
  // Inicia el movimiento del objeto
});
