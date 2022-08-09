const campoFiltro = document.querySelector('#filtrar-tabela')

campoFiltro.addEventListener("input", function(){
    console.log(this.value)
    const pacientes = document.querySelectorAll(".paciente")

    //Percorer todos os pacientes presentes
    for (let i = 0; i < pacientes.length; i++) {
        const paciente = pacientes[i];
        const tdNome = paciente.querySelector(".info-nome")
        const nome = tdNome.textContent

        //Verificação: Nome for diferente dentro do campoFiltro, ele irá adicionar a class invisivel nos pacientes. Caso tenha ele irá remover essa class.        
        if(nome!= this.value){
            paciente.classList.add("invisivel")
        }else{
            paciente.classList.remove("invisivel")
        }
    }
        
});