var pacientes = document.querySelectorAll(".paciente");
var titulo = document.querySelector(".titulo")

for(var i = 0; i < pacientes.length; i++) {
    
    var paciente = pacientes[i] 

    var tdAltura = paciente.querySelector(".info-altura");
    var tdPeso = paciente.querySelector(".info-peso");

    var tdImc = paciente.querySelector(".info-imc");

    var altura = tdAltura.textContent;
    var peso = tdPeso.textContent;

    var pesoEhValido = validaPeso(peso)
    var alturaEhValida = validaAltura(altura)

    if (!pesoEhValido) {
        tdPeso.textContent = "Peso inválido!";
        pesoEhValido = false;
        paciente.classList.add("paciente-invalido")
    }

    if (!alturaEhValida) {
        alturaEhValida = false;
        tdAltura.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido")
    }

    if (alturaEhValida && pesoEhValido) {

        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    } else {
        tdImc.textContent = "Altura e/ou peso inválidos!"
    }
}

function validaPeso (peso) {
    if(peso >= 0 && peso < 1000){
        return true
    }else{
        return false
    }
}

function validaAltura (altura) {
    if(altura >=0 && altura <= 3.0){
        return true
    }else{
        return false
    }
}

function calculaImc(peso, altura) {
    let imc = 0
    imc = peso / (altura * altura)

    return imc.toFixed(2);
}
