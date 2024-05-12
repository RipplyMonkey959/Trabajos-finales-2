function multip() { // Función para generar la tabla de multiplicar

    num = document.getElementById("num").value; // Obtiene el valor ingresado por el usuario desde el campo de entrada con el id "num"
    num = parseInt(num); // Convierte el valor obtenido a un número entero

    for (var i = 1; i <= 10; i++) { // Itera desde 1 hasta 10 para generar la tabla de multiplicar
        multi = num * i; // Calcula el resultado de la multiplicación
        document.write(num + "x" + i + "=" + multi + "<br>"); // Imprime en el documento HTML cada línea de la tabla de multiplicar
    } //Cierre
} //Cierre