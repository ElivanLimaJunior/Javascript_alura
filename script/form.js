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
    imcTd.textContent = calculaImc(peso,altura)
    
    // Colocando elementos como filho

    pacienteTR.appendChild(nomeTd)
    pacienteTR.appendChild(pesoTd)
    pacienteTR.appendChild(alturaTd)
    pacienteTR.appendChild(gorduraTd)
    pacienteTR.appendChild(imcTd)
    
    // Adiconando a tabela

    const tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTR)
})