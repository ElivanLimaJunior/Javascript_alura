/*
E se mudarmos de ideia e, em vez da cor do parágrafo, quisermos que o fundo do último exercício seja azul?

    <p id="latim"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

    <script>
        var paragrafo = document.querySelector("#latim");
        // Código aqui!
    </script>

Qual código abaixo deixa o fundo do parágrafo azul?

R:

    paragrafo.style.backgroundColor = "blue";

Explicação:

Já vimos que para alterar o estilo de um elemento devemos acessar a propriedade style, seguido do estilo que será modificado. Porém , quando o nome do estilo possui duas palavras no CSS - como é o caso de background-color - devemos representá-lo com o estilo camelCase, no qual a primeira palavra fica em caixa baixa (minúsculo) e a letra inicial das palavras seguintes ficam em caixa alta (maiúsculo). Desta forma, a propriedade background-color deverá ser escrita da seguinte maneira no código: backgroundColor.

Ou seja, para alterar a cor de fundo do parágrafo para azul, utilizaremos o código abaixo:

    <script>
    var paragrafo = document.querySelector("#latim");
    paragrafo.style.backgroundColor = "blue";
    </script>
*/

// Isto é válido para qualquer propriedade do CSS que tenha duas palavras, como background-color, font-size, font-style, border-radius...etc!
