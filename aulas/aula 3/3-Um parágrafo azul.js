/*
    Qual dos códigos abaixo altera a cor da letra do parágrafo abaixo para a cor azul ?

    <p id="latim"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>


    <script>
        var paragrafo = document.querySelector("#latim");
        // Código aqui!
    </script>

    R:

    paragrafo.style.color = "blue"

    Explicação:

    Se queremos modificar um estilo de um elemento selecionado com o Javascript, devemos primeiro acessar a propriedade style , que contêm todos os estilos daquele elemento. Depois que temos a propriedade .style em mãos, devemos especificar qual estilo desejamos alterar , que neste caso é a cor do texto ou seja o estilo color.

    paragrafo.style.color;

    Só que não basta pegar o estilo, devemos atribuir a ele um novo valor, como neste caso desejamos alterar para a cor azul, vamos colocá-lo com valor de blue:

    paragrafo.style.color = "blue";

    O interessante é que podemos colocar como valor, qualquer valor que seria válido no CSS, então se quiséssemos poderíamos utilizar o código RGB para representar a cor:

    paragrafo.style.color = "rgb(0,0,255)";

    Ambos os códigos obtêm o mesmo resultado!
*/

