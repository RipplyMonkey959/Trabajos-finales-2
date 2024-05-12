let multip = () => { // Declara una función llamada 'multip'

    num = document.getElementById("num").value; // Obtiene el valor del elemento con el ID 'num' y lo asigna a la variable 'num'
    num = parseInt(num); // Convierte el valor de 'num' a un número entero utilizando la función parseInt()

    for (var i = 1; i <= 10; i++) { // Inicia un bucle for que se ejecuta 10 veces, donde 'i' va de 1 a 10
        multi = num * i; // Calcula el producto de 'num' y 'i' y lo asigna a la variable 'multi'
        document.write(num + "x" + i + "=" + multi + "<br>"); // Escribe en el documento el resultado de la multiplicación
    }
}
