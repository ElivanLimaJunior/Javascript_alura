var adicionarPaciente = document.querySelector("#buscar-pacientes")

adicionarPaciente.addEventListener("click", function(){
    console.log("222")

    // 1
    var xhr = new XMLHttpRequest();
    // 2
    // 3
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes") // 4
    // 5
    // 6
    xhr.addEventListener("load", function(){
        // 7
        const resposta = xhr.responseText // 8
        const pacientes = JSON.parse(resposta) // passando para um Objeto
        console.log(typeof pacientes) // 9
        console.log(pacientes)
        //10
        // 11
    })

    xhr.send()
})

    // Comentarios
    // 1:     // XML HTTP Request: Objeto do JS responsavel de fazer requisições HTTP. o XML na frente é por que antigamente ele era responsavel por trafegar dados do tipo XML, agora ele pode trafegar outros dados também.

    // 2:  // Precisamos ensinar para ele como vai funcionar.

    // 3: // Primeiro usamos a função open() para passarmos qual tipo de requisição queremos fazer.

    // 4: estamos fazendo uma requisição do tipo "Get', no "link"

    // 5:  Isso seria o equivalente a chegar no navegador e apenas digitar o endereço.

    // 6: Para enviarmos usamos o evento send() no xhr. Antes nos precisamos acrescentar um "evento" no xhr para acessarmos os dados da resposta.

    // 7: o xhr tem uma propriedade chamada responseText, usamos ela junto ao console.log para que a resposta seja impressa no nosso console.

    // 8: agora podemos ver qeu já estamos trazendo os dados da reposta.

    // 9: O que nós estamos puxando é um objeto JSON. JSON é basicamente um formato leve de troca de informações/dados entre sistemas. Mas JSON significa JavaScript Object Notation.

    // 10: Ao checar seu tipo, podemos ver que se trata de string, porém ele está organizado como uma array do javascript. 

    // 11: Então precisamos usar o JSON.parser(resposta). Dessa forma ele irá ler o arquivo e irá converter o JSON em um objeto Javascript.