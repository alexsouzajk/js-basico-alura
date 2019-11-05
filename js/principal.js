
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
        tdImc.textContent = calculaImc(peso, altura);
    }
}

function calculaImc(peso, altura) {
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso(peso) {
    if ((peso >= 0 && peso < 1000) && peso != "") {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {

    if ((altura >= 0 && altura < 3.00) && altura != "") {
        return true;
    } else {
        return false;
    }
}

function validaNome(nome) {
    if (nome.length > 0 && nome != "") {
        return true;
    }
    return false;
}

function validaGordura(gordura) {
    if (gordura.length > 0 && gordura > 0) {
        return true;
    }
    return false;
}
