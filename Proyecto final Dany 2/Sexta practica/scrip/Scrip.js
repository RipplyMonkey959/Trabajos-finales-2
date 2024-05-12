//inicializacion de variables
let tarjetasdestapadas = 0; // Contador de tarjetas destapadas
let tarjeta1 = null; // Primer tarjeta destapada
let tarjeta2 = null;// segunda tarjeta destapada
let primerresultado = null; // Resultado de la primera tarjeta
let segundoresultado = null; // Resultado de la segunda tarjeta
let movimientos = 0; // Contador de movimientos
let aciertos = 0; // Contador de aciertps
let temporizador = false; // Estado del temporizador
let timer = 30; // Tiempo inicial 
let timerinicial= timer; // Valor inicial del temporizador
let tiemporegresivo = null; // Identificador del temporizador

//apuntando a documentos HTML
let mostrarmovimientos = document.getElementById('movimientos'); // Elemento para mostrar el contador de movimientos
let mostraraciertos = document.getElementById('aciertos'); // Elemento para mostrar el contador de aciertos
let mostrartiempo = document.getElementById("t-restante") // Elemento para mostrar el temporizador

//generacion de numeros
let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]; //Numeros en el memorama
numeros = numeros.sort(()=>{return Math.random()-0.5}); // Se mezclan los números aleatoriamente
console.log(numeros);

//funciones
function contartiempo(){ // Función para contar el tiempo regresivo
    setInterval(()=>{ // Función que se ejecuta cada segundo
        timer--; // Decrementa el temporizador
        mostrartiempo.innerHTML = 'tiempo: ' + timer; // Actualiza el tiempo mostrado en el HTML
        if(timer == 0){ // Detiene el temporizador cuando llega a cero
        clearInterval(tiemporegresivo); //Tiempo regresivo
        bloqueartarjetas(); // Bloquea todas las tarjetas
        }
    },1000); // Intervalo de ejecución: cada segundo
}

function bloqueartarjetas(){ // Función para bloquear todas las tarjetas
    for (let i = 0; i<=15; i++){
let tarjetabloqueada = document.getElementById(i); // Obtiene la tarjeta por su id
tarjetabloqueada.innerHTML = numeros[i]; // Muestra el número correspondiente en la tarjeta
tarjetabloqueada.disabled = true; // Deshabilita la tarjeta
    }
}

// funcion principal
function destapar(id){  // Función principal para destapar las tarjetas
    if(temporizador == false){ // El temporizador esta agotado
        contartiempo(); // Inicia el temporizador si aún no está iniciado
        temporizador = true; // Cambia el estado del temporizador a verdadero
    }
  tarjetasdestapadas++; // Incrementa el contador de tarjetas destapadas
  console.log(tarjetasdestapadas); 
 if(tarjetasdestapadas == 1){  //mostrar primer numero
    tarjeta1 = document.getElementById(id); 
    primerresultado = numeros[id] //Agrega un resultado
    tarjeta1.innerHTML = primerresultado; // Muestra el primer número en la primera tarjeta

    //desabilitar el primer boton
    tarjeta1.disabled = true; //Desabilita la segunda tarjeta
 }else if(tarjetasdestapadas ==2){ //mostrar segundo numero
    tarjeta2 = document.getElementById(id);
    segundoresultado = numeros[id]; //Agrega un resultado
    tarjeta2.innerHTML = segundoresultado; // Muestra el psegundo número en la segunda tarjeta
    tarjeta2.disabled = true; // desabilitar el segundo boton

    //incrementar movimientos
    movimientos++;
    mostrarmovimientos.innerHTML = 'Movimientos: '+movimientos;

    if(primerresultado == segundoresultado){
        //encerrar contador tarjetas destapadas
        tarjetasdestapadas =0; // Reinicia el contador de tarjetas destapadas

        //Aumentar aciertos
        aciertos++;
        mostraraciertos.innerHTML ='aciertos: '+aciertos; // Muestra los movimientos en el HTML

        if(aciertos== 8){
            clearInterval(tiemporegresivo); // Detiene el temporizador
            mostraraciertos.innerHTML = ' Eres todo un crack'; // Muestra un mensaje de felicitación
            mostrartiempo.innerHTML = 'bieeen'; // Muestra un mensaje de éxito
            mostrarmovimientos.innerHTML = 'hazta que logras hacer algo bien'; // Muestra un mensaje de éxito
        }

    }else{
        //mostrar momentaneamente valores y volver a tapar
        setTimeout(()=>{
            tarjeta1.innerHTML = ' ';
            tarjeta2.innerHTML= ' ';
            tarjeta1.disabled = false;
            tarjeta2.disabled = false;
            tarjetasdestapadas = 0;
        },500); // Después de 0.5 segundos (500 milisegundos)

    } //Cierre
} //Cierre

} //Cierre