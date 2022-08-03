var pacientes = document.querySelectorAll(".paciente");
var titulo = document.querySelector(".titulo")

for(var i = 0; i < pacientes.length; i++) {
    
    var paciente = pacientes[i] 

    var tdAltura = paciente.querySelector(".info-altura");
    var tdPeso = paciente.querySelector(".info-peso");

    var tdImc = paciente.querySelector(".info-imc");

    var altura = tdAltura.textContent;
    var peso = tdPeso.textContent;

    var alturaEhValida = true;
    var pesoEhValido = true;

    if (peso <= 0 || peso > 1000) {
        tdPeso.textContent = "Peso inválido!";
        pesoEhValido = false;
        paciente.classList.add("paciente-invalido")
    }

    if (altura <= 0 || altura >= 3) {
        alturaEhValida = false;
        tdAltura.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido")
    }

    if (alturaEhValida && pesoEhValido) {

        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2); // toFixed() diminui o numero de casas mostrado.
    } else {
        tdImc.textContent = "Altura e/ou peso inválidos!"
    }
}

// Eventos

const botaoAdicionar = document.querySelector("#adicionar-paciente")
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault() //Previnindo comportamento de enviar formulário para vermos o evento ed clicar.

    // Pegando valores do formulário

    const form = document.querySelector("#form-adiciona")
    const nome = form.nome.value
    const peso = form.peso.value
    const altura = form.altura.value
    const gordura = form.gordura.value

    // Criando elementos

    const pacienteTR = document.createElement("tr")
    const nomeTd = document.createElement("td")
    const pesoTd = document.createElement("td")
    const alturaTd = document.createElement("td")
    const gorduraTd = document.createElement("td")
    const imcTd = document.createElement("td")

    // pegando conteúdo dos inputs

    nomeTd.textContent = nome
    pesoTd.textContent = peso
    alturaTd.textContent = altura
    gorduraTd.textContent = gordura
    imcTd.textContent = imcTd
    
    // Colocando elementos como filho

    pacienteTR.appendChild(nomeTd)
    pacienteTR.appendChild(pesoTd)
    pacienteTR.appendChild(alturaTd)
    pacienteTR.appendChild(gorduraTd)

    // Adiconando a tabela

    const tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTR)
})