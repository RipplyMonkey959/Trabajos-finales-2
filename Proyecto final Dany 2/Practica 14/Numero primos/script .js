let verificarPrimo = () => { // Declara una función llamada 'verificarPrimo' usando una arrow function
    let numero = parseInt(document.getElementById("numeroInput").value); // Obtiene el valor del número ingresado por el usuario y lo convierte a entero usando parseInt()

    if (numero <= 1) { // Verifica si el número ingresado es menor o igual a 1
        elpriimo = false; // Si es así, establece la variable 'elpriimo' como false
    } else { // Si el número es mayor que 1, continúa con la verificación de si es primo
        for (let i = 2; i <= Math.sqrt(numero); i++) { // Itera desde 2 hasta la raíz cuadrada del número ingresado
            if (numero % i === 0) { // Verifica si el número es divisible por algún número en el rango
                elpriimo = false; // Si es divisible, establece la variable 'elpriimo' como false
                break; // Sale del bucle for
            }
        }
    }

    if (elpriimo) { // Verifica si 'elpriimo' es verdadero (es decir, si el número es primo)
        document.getElementById("resultado").textContent = "El número es primo"; // Si es así, muestra un mensaje indicando que el número es primo
    } else {
        document.getElementById("resultado").textContent = "El número no es primo"; // Si 'elpriimo' es falso, muestra un mensaje indicando que el número no es primo
    }
}
