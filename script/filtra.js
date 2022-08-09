const campoFiltro = document.querySelector('#filtrar-tabela')

campoFiltro.addEventListener("input", function(){
    console.log(this.value)
    const pacientes = document.querySelectorAll("paciente")
    for (let i = 0; i < pacientes.length; i++) {
        const paciente = pacientes[i];
        const tdNome = paciente.querySelector(".info-nome")
        const nome = paciente.textContent
    }
        
});