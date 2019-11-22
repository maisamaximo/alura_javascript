var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");


for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    var imc = paciente.querySelector(".info-imc");
    imc.textContent = calculaIMC(peso, altura);

    if (peso > 500 || peso < 0) {
        console.log("peso invalido!");
        imc.textContent = "peso invalido!"
        paciente.classList.add("paciente-invalido");
    }


    if (altura > 4 || altura < 0) {
        console.log("altura invalida!");
        imc.textContent = "altura invalida!"
        paciente.classList.add("paciente-invalido");

    }
}


function calculaIMC(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}


