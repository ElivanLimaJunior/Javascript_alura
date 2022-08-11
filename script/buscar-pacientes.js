var adicionarPaciente = document.querySelector("#buscar-pacientes")

adicionarPaciente.addEventListener("click", function(){
    console.log("222")

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes") 

    xhr.addEventListener("load", function(){
        const erroAjax = document.querySelector("#erro-ajax")

        if (xhr.status == 200) { // Verificar existência
            erroAjax.classList.add("invisivel")
            const resposta = xhr.responseText 
            const pacientes = JSON.parse(resposta)
    
            pacientes.forEach(paciente => {
                adicionaPacienteNaTabela(paciente)
            });
        }else{
            console.log(xhr.status)
            console.log(xhr.responseText)
            erroAjax.classList.remove("invisivel")
        }


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