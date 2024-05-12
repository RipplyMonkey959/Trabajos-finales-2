var canvas = document.getElementById('MyCanvas'); // Obtiene el elemento canvas del documento HTML con el id "MyCanvas"
var ctx = canvas.getContext("2d"); // Obtiene el contexto de renderizado 2D del canvas
var painting = true; // Variable que indica si se está dibujando


function draw(e){ // Función para dibujar en el canvas
    ctx.strokeStyle=colorPicker.value; // Establece el color de trazo del contexto de dibujo como el valor seleccionado en el colorPicker
    if(!painting) return; // Si no se está dibujando, sale de la función
    ctx.lineWidth = 1;  // Establece el ancho de la línea
    ctx.lineCap = "round"; // Establece el estilo de la línea
    var rect = canvas.getBoundingClientRect(); // Obtiene la posición del ratón relativa al canvas
    var x = e.clientX - rect.left - canvas.width /2; // Posicion x que va de izquierda a derecha
    var y = e.clientY - rect.top - canvas.height /2;  //Posicion y que va de arriba a abajo
    ctx.lineTo(x, y); // Dibuja una línea desde la posición anterior hasta la posición actual
    ctx.stroke();   // Dibuja el trazo
    ctx.beginPath();  // Comienza un nuevo trazo
    ctx.moveTo(x, y); // Establece el punto de inicio del nuevo trazo en la posición actual
} //Cierre

canvas.addEventListener('mousemove', draw);  // Agrega un event listener para el evento 'mousemove' al canvas, que llama a la función draw
var colorPicker = document.getElementById('colorPicker'); // Obtiene el elemento colorPicker del documento HTML