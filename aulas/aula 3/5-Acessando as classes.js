/*
Qual propriedade abaixo nos dá acesso à lista das classes de um HTML selecionado pela função querySelectorAll?

R:

    .classList

Quando selecionamos um elemento com as funções de querySelector, elas nos devolvem um objeto que tem algumas propriedades especiais, que falam sobre as características do HTML selecionado. Uma dessas propriedades é a .classList, que como o nome indica nos mostras classes que aquele HTML tem.

Explicação:

Experimente usar o seguinte código:

    <h1 class="titulo principal azul"> Sou o titulo principal! </h1>

E no arquivo JavaScript, peça para imprimir o classList da tag h1:

    var titulo = document.querySelector("h1");
    console.log(titulo.classList);

Será exibido no seu console, uma estrutura de lista do JavaScript com todas as classes daquele <h1>:

    //resultado
    ["titulo","principal","azul"]
*/