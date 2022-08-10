const campoFiltro = document.querySelector('#filtrar-tabela')

campoFiltro.addEventListener("input", function(){
    const pacientes = document.querySelectorAll(".paciente")
    //Se o valor do campoFiltro for maior que 0
    if (this.value.length > 0) {
    //Percorer todos os pacientes presentes
    for (let i = 0; i < pacientes.length; i++) {
        const paciente = pacientes[i];
        const tdNome = paciente.querySelector(".info-nome")
        const nome = tdNome.textContent
        // Regex 
        const expressao = new RegExp(this.value,"i")        
        //Verificação: Nome for diferente dentro do campoFiltro, ele irá adicionar a class invisivel nos pacientes. Caso tenha ele irá remover essa class.        
        if( !expressao.test(nome)){ // testando se nos paciente tem um pedaço do input digitado.
            paciente.classList.add("invisivel")
        }else{
            paciente.classList.remove("invisivel")
        }
    }
    }else{
        for (let i = 0; i < pacientes.length; i++) {
            const paciente = pacientes[i];
            paciente.classList.remove("invisivel")
            
        }
    }

        
});