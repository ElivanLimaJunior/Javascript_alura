var adicionarPaciente = document.querySelector("#buscar-pacientes")

adicionarPaciente.addEventListener("click", function(){
    console.log("222")

    // XML HTTP Request: Objeto do JS responsavel de fazer requisições HTTP. o XML na frente é por que antigamente ele era responsavel por trafegar dados do tipo XML, agora ele pode trafegar outros dados também.
    var xhr = new XMLHttpRequest();
    // Precisamos ensinar para ele como vai funcionar.

    // Primeiro usamos a função open() para passarmos qual tipo de requisição queremos fazer.
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes") // estamos fazendo uma requisição do tipo "Get', no "link"
    // Isso seria o equivalente a chegar no navegador e apenas digitar o endereço.

    // Para enviarmos usamos o evento send() no xhr. Antes nos precisamos acrescentar um "evento" no xhr para acessarmos os dados da resposta.
    xhr.addEventListener("load", function(){
        // o xhr tem uma propriedade chamada responseText, usamos ela junto ao console.log para que a resposta seja impressa no nosso console.
        console.log(xhr.responseText) // agora podemos ver qeu já estamos trazendo os dados da reposta
    })

    xhr.send()
})