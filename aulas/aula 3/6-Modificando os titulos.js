/*
Rômulo deseja que todos os H2's de sua página tenham a classe "titulo", que modifica a fonte dos H2's e deixa eles com um destaque específico.

Qual dos códigos abaixo implementa uma solução em Javascript para que todos os <h2> da página ganhem a classe "titulo"?

R:

    var titulos = document.querySelectorAll("h2");

    for(var i = 0 ; i <  titulos.length ; i++){
        var titulo = titulos[i];
        titulo.classList.add("titulo");
    }

Explicação:

A função responsável por adicionar uma classe é a função .add(), que recebe como parâmetro o nome da classe que queremos adicionar!

Só devemos lembrar de chamar esta função depois de acessarmos a propriedade .classList, que contêm as classes do HTML selecionado. Então, para resolver o problema de Rômulo, devemos utilizar o código abaixo:

    var titulos = document.querySelectorAll("h2");

    for(var i = 0 ; i <  titulos.length ; i++){
        var titulo = titulos[i];
        titulo.classList.add("titulo");
    }



Obsevações:

1- Quando queremos manipular as classes de um elemento, devemos acessar sua propriedade .classList, e se queremos adicionar uma classe, iremos utilizar a função .add()

2- Cuidado! A função .add() deve receber apenas o nome da classe, e não o seletor CSS de ponto também!
Se queremos adicionar a classe "titulo" , devemos usar apenas .add("titulo").

3- A função .addClass() não existe! Se queremos adicionar uma classe devemos utilizar a função .add()
*/