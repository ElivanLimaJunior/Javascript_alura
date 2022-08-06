const pacientesAll = document.querySelectorAll(".paciente")

const tabelap = document.querySelector("#tabela-pacientes")

tabelap.addEventListener("dblclick", function(event){
    // ParentNode nós iremos acessar o pai do evento clicado. 
    event.target.parentNode.remove()
    
})

// pacientesAll.forEach(paciente => {
//     paciente.addEventListener("dblclick", function(){
//         this.remove() // para eu ter acesso ao dono desse evento, preciso usar a palavra "this". nesse caso o evento vai execultar a ação e o evento está atrelado ao dono do evento que é o paciente.
//     })
// });