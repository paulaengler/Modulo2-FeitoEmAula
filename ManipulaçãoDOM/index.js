//document se refere a todo o html - aspas simples ou dupla
document.title = "Video 2 - Alterado"

//mudando o background
document.body.style.background = "blue";
document.body.style.backgroundImage = "url('')";

//escrever na página
document.write("Escrevendo algo novo")
document.write("<h1>Escrevendo algo novo</h1>")
document.write("<p>Escrevendo um parágrafo</p><br>pulando uma linha")

//document Element By Id

/* id é unico - Já o id serve para não só darmos estilo dentro do css mas como também 
no mundo Javascript podemos utilizar o id para manipular esse valores. 
O id serve para identificarmos controles e aplicarmos estilos CSS e para manipularmos elementos via Javascript. Ou seja,
 você usa o id somente para manipular/trabalhar com controles do lado do cliente (client-side).*/
document.getElementById('nome').innerHTML = "<b>eu sou o novo conteúdo</b>"
//b em negrito --- consegue colocar uma tag html 

document.getElementById('paula').innerText = "Eu sou um texto simples"
//considera texto 

//com 3 segundos, vai mostrar o novo texto
setTimeout(function () {
    document.getElementById('nome').innerHTML = "<b>eu sou o novo conteúdo</b>"
}, 3000);

//get elements by name

/* O name no input serve para especificar um nome para o elemento da tag input, 
mas mais especificamente, o atributo name é usado para referenciar elementos no 
javascript ou para refererenciar dados de um formulário. 
Ou seja, caso você queria pegar os valores que são adicionanados nesses input, 
o atributo name é de suma importância. 
name, que você usa pra identificar valores do lado do servidor(server-side).*/ 

document.getElementsByName('bibi')[0].innerHTML = "<b>novo texto</b>"
//indicar a posição que vai mudar

document.getElementsByName('bibi')[1].innerText = "texto da div... "

setTimeout(function () => {
    document.getElementsByName('bibi')[1].innerText = "texto da div... "
}, 4000;)

//Document Elements By Class Name