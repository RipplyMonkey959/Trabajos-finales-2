function verificarPrimo() { // Función para verificar si un número es primo
    let numero = parseInt(document.getElementById("numeroInput").value); // Obtener el número ingresado por el usuario y convertirlo a un entero

    let esPrimo = true; // Inicializar una variable para almacenar si el número es primo o no
    if (numero <= 1) { // Verificar si el número es menor o igual a 1, en cuyo caso no es primo
        esPrimo = false;
    } else { // Si el número es mayor que 1, verificar si es divisible por algún número menor que su raíz cuadrada
        for (let i = 2; i <= Math.sqrt(numero); i++) { // Si encuentra un divisor, el número no es primo y se interrumpe el bucle
            if (numero % i === 0) {
                esPrimo = false; //Verificas si el numero no es primo
                break;
            }
        }
    }

    if (esPrimo) { // Mostrar el resultado en el elemento con id "resultado" del documento HTML
        document.getElementById("resultado").textContent = "El número es primo"; //Mensaje al usuario si el numero es primo
    } else {
        document.getElementById("resultado").textContent = "El número no es primo"; //Mensaje al usuario si numero no es primo
    }
}