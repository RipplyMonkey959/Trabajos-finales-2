// Selecciona el elemento con el id "boton" y agrega un evento de clic que llama a la función "iniciar"
document.getElementById("boton").addEventListener("click", iniciar);

// Función que se ejecuta al hacer clic en el botón "iniciar"
function iniciar() {
    // Inicializa la variable 'vidas' con 8
    let vidas = 8;
    // Genera un número aleatorio entre 1 y 100 y lo almacena en la variable 
    let num = Math.floor(Math.random() * 100 + 1);

    // Mientras haya vidas restantes
    while (vidas > 0) {
        // Solicita al usuario que ingrese un número y muestra la cantidad de vidas restantes
        let numU = prompt("Te quedan " + vidas + " vidas. Escribe el número: ");
        
        // Si el número ingresado por el usuario es igual al número generado aleatoriamente
        if (numU == num) {
            // Muestra un mensaje de éxito y termina el bucle
            alert("¡Lo lograste, venciste al sistema!");
            break;
        }
        // Si el número ingresado por el usuario es mayor que el número generado aleatoriamente
        if (numU > num) {
            // Muestra un mensaje indicando que el número es menor
            alert("Nope, el número es menor");
        }
        // Si el número ingresado por el usuario es menor que el número generado aleatoriamente
        if (numU < num) {
            // Muestra un mensaje indicando que el número es mayor
            alert("Nope, el número es mayor");
        }
        // Decrementa el número de vidas restantes
        vidas--;
    }
    
    // Si se agotan las vidas y el usuario no adivina el número
    if (vidas == 0) {
        // Muestra un mensaje de fracaso
        alert("Eres una cosita patética");
    }
}
