var adicionarPaciente = document.querySelector("#buscar-pacientes")

adicionarPaciente.addEventListener("click", function(){
    console.log("222")

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes")

    xhr.addEventListener("load", function(){
        console.log(xhr.responseText)
    })

    xhr.send()
})