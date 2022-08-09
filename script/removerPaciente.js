const pacientesAll = document.querySelectorAll(".paciente")

const tabelap = document.querySelector("#tabela-pacientes")

tabelap.addEventListener("dblclick", function(event){
    // ParentNode nós iremos acessar o pai do evento clicado. 
    event.target.parentNode.classList.add("fadeOut")

    //O javascript executa essas funções instataneamente, então precisamos por um time para ele executar a função de remover para assim podermos ver a animação de remoção que estamos adicionado.
    //setTimeout() Pode receber dentro dele uma função, a função que passamos para ele é justamente a função de remover o paciente da nossa planilha. 
    setTimeout(function(){
        event.target.parentNode.remove()
    },500) // apóso fechamento da função, nós passamos em Milisegundos o tempo de irá demorar para executar a fução dentro do timeout
    
    
})

// pacientesAll.forEach(paciente => {
//     paciente.addEventListener("dblclick", function(){
//         this.remove() // para eu ter acesso ao dono desse evento, preciso usar a palavra "this". nesse caso o evento vai execultar a ação e o evento está atrelado ao dono do evento que é o paciente.
//     })
// });