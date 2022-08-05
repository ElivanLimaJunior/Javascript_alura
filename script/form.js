const botaoAdicionar = document.querySelector("#adicionar-paciente")
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault() //Previnindo comportamento de enviar formulário para vermos o evento ed clicar.

    const form = document.querySelector("#form-adiciona")

    // Pegando valores do formulário
    const paciente = obtemPacienteDoFormulario(form)
    // Criar a tr e td do paciente
    let pacienteTr = montarTr(paciente)
    // Validando paciente
    if(!validaPaciente(paciente)){
        console.log("paciente inválido")
        return // deixando esse return vazio, caso o paciente seja inválido ele irá automaticamente sair da função anonima sem adicionar a tabela.
    }
    // Adiconando a tabela
    const tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTr)
    // Limpando campos preenchidos
    form.reset()
    
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
     // Colocando elementos como filho
 
     pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"))
     pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"))
     pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"))
     pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"))
     pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"))

    return pacienteTr //Não esquecer do return.
}

function montaTd(dado, classe){
    const td = document.createElement("td")
    td.textContent = dado
    td.classList.add(classe)

    return td
}

function validaPaciente(paciente) {
    if(validaPeso(paciente.peso)){ // quando passamos apenas o parametro para o if, nós estamos analisando se ele é verdadeiro. Seria o mesmo de colocarmos: if(validaPeso(paciente.peso) === true)
        return ""
    }else{
        return false
    }
}