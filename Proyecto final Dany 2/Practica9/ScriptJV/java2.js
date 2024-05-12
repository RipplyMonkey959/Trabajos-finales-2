let botonFibonacci = document.getElementById('generar'); // Obtiene el botón de generar serie Fibonacci por su id
if (botonFibonacci) { // Verifica si se encontró el botón
    botonFibonacci.addEventListener('click', function() { // Agrega un evento de escucha al botón para generar la serie Fibonacci cuando se haga clic
        let generarFibonacci = (n) => { // Definición de la función para generar la serie de Fibonacci hasta el número n
            let numeros = [0, 1];
            for (let i = 2; i < n; i++) {
                numeros.push(numeros[i - 1] + numeros[i - 2]);
            }
            return numeros;
        }

        document.getElementById('fibonacci').innerText = generarFibonacci(20).join(', ');
    });
}