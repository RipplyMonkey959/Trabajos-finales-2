let botonFibonacci = document.getElementById('generar'); /* Selecciona el elemento HTML con el id "generar" 
y lo almacena en la variable botonFibonacci*/
if (botonFibonacci) {/*Comprueba si botonFibonacci es válido (si existe).*/
    botonFibonacci.addEventListener('click', function() {/*Agrega un event listener al botón seleccionado (botonFibonacci). 
    Cuando se hace clic en este botón, se ejecutará la función anónima proporcionada.*/
        let generarFibonacci = (n) => { /*Define una función llamada generarFibonacci utilizando una arrow function (función flecha). 
        Toma un parámetro n que representa cuántos números de la secuencia Fibonacci se generarán.*/
            let numeros = [0, 1]; /*Crea un array llamado numeros que contiene los dos primeros números de la secuencia Fibonacci.*/
            for (let i = 2; i < n; i++) {/*Inicia un bucle for que empieza en el tercer número de la secuencia Fibonacci (índice 2) 
            y termina antes del número especificado por el parámetro n.*/
                numeros.push(numeros[i - 1] + numeros[i - 2]);/*Calcula el siguiente número de Fibonacci sumando los dos números anteriores
                 y lo agrega al array numeros.*/
            }
            return numeros;/*Devuelve el array numeros que contiene la secuencia Fibonacci generada.*/
        }

        document.getElementById('fibonacci').innerText = generarFibonacci(20).join(', ');/*Selecciona el elemento HTML con el id "fibonacci" 
        y establece su contenido de texto como la secuencia Fibonacci generada por la función generarFibonacci(20), 
        uniendo los elementos del array con una coma y un espacio entre ellos. Esto generará los primeros 20 números
         de la secuencia Fibonacci cuando se haga clic en el botón.*/
    });
}