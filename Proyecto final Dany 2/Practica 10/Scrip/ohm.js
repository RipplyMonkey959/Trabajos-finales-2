function calcularResistencia(){
    var voltaje = document.getElementById("voltaje").value;
    var corriente = document.getElementById("corriente").value;
    var resultado = document.getElementById("lblResultado");

    var resistencia;

    if (voltaje != ""&& corriente !=""){
        resistencia = voltaje / corriente;
        resultado.innerHTML = "Resistencia: " + resistencia + "Ohms";
        console.log("R =" + resistencia + "Ohms");
    }else{
        alert("ingresar datos por fovor")
    }
}

function calcularCorriente(){
    var voltaje = document.getElementById("voltaje").value;
    var resistencia0 = document.getElementById("resistencia0").value;
    var resultado = document.getElementById("lblcorrResultado");

    var corriente;

    if (voltaje != ""&& resistencia0 !=""){
        corriente = voltaje / resistencia0;
        resultado.innerHTML = "Corriente: " + corriente + "Amperes";
        console.log("I =" + corriente + "Amperes");
    }else{
        alert("ingresar datos")
    }
}

function calcularVoltaje(){
    var resistencia1 = document.getElementById("resistencia1").value;
    var corriente = document.getElementById("corriente").value;
    var resultado = document.getElementById("IbiVoltResultado");

    var voltaje;

    if (corriente != ""&& resistencia1 !=""){
        voltaje = resistencia1 * corriente;
        resultado.innerHTML = "Voltaje: " + voltaje + "Voltios";
        console.log("V =" + voltaje + "Voltios");
    }else{
        alert("ingresar datos")
    }
}