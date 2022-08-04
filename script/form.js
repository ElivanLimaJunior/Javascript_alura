const botaoAdicionar = document.querySelector("#adicionar-paciente")
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault() //Previnindo comportamento de enviar formulário para vermos o evento ed clicar.

    const form = document.querySelector("#form-adiciona")

    // Pegando valores do formulário
    const paciente = obtemPacienteDoFormulario(form)
    // Criar a tr e td do paciente
    let pacienteTr = montarTr(paciente)
    // Adiconando a tabela
    const tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTr)
    
})

function obtemPacienteDoFormulario(form) {

    const paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente
}

function montarTr(paciente) {
     // Criando elementos
     const pacienteTr = document.createElement("tr")
     pacienteTr.classList.add("paciente")

     // pegando conteúdo dos inputs
     const nomeTd = montaTd(paciente.nome, "info-nome")
     const pesoTd = montaTd(paciente.peso, "info-peso")
     const alturaTd = montaTd(paciente.altura, "info-altura")
     const gorduraTd = montaTd(paciente.gordura, "info-gordura")
     const imcTd = montaTd(paciente.imc, "info-imc")
    
    // alterando conteúdo

     nomeTd.textContent = paciente.nome
     pesoTd.textContent = paciente.peso
     alturaTd.textContent = paciente.altura
     gorduraTd.textContent = paciente.gordura
     imcTd.textContent = paciente.imc

     // Colocando elementos como filho
 
     pacienteTr.appendChild(nomeTd)
     pacienteTr.appendChild(pesoTd)
     pacienteTr.appendChild(alturaTd)
     pacienteTr.appendChild(gorduraTd)
     pacienteTr.appendChild(imcTd)

    return pacienteTr //Não esquecer do return.
}

function montaTd(dado, classe){
    const td = document.createElement("td")
    td.textContent = dado
    td.classList.add(classe)

    return td
}