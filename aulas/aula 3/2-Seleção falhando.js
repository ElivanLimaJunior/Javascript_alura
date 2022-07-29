/*
    João está montando um script em Javascript que deve pegar todos os nomes dos produtos de um e-commerce.

    O HTML da lista é como o abaixo:
*/

<ul class="lista-produtos">
    <li class="produto">Web cam</li>
    <li class="produto">Microfone</li>
    <li class="produto">Fundo verde</li>
    <li class="produto">Notebook</li>
</ul>

/*
    E o script do João é o seguinte:
*/

var produtos = document.querySelector("lista-produtos");

for( var i=0 ; i < produtos.length ; i++){
    var produto  = produtos[i];
    var nomeDoProduto = produto.textContent;
    console.log(nomeDoProduto);
}

/*
    Porém o script não funciona como João espera.

    Quais alternativas abaixo apontam para os possíveis erros do código de João ?

    R:

    1- João está utilizando a função errada, como ele quer selecionar diversos elementos, ele deve usar a função querySelectorAll().

    2- João esqueceu de colocar o . no seletor de sua função querySelector() e trocar o seletor para apenas "produto". Dessa forma, o seletor correto seria ".produto".

    Explicação:
    
    João cometeu dois erros ao querer selecionar todos os produtos da lista.

    O primeiro foi o uso da função de seleção errada, afinal se ele queria selecionar todos os produtos ele deveria utilizar a função querySelectorAll(), que retornar um array com todo mundo que atende critério de seleção.

    O segundo erro foi no parâmetro da função seletora, se ele deseja buscar por todos os produtos que tem classe produto, ele deve utilizar o seletor de classe que é ponto.
*/