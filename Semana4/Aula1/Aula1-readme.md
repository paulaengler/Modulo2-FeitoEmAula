/**
 * jsondoc - referente a uma função
 * @param a - recebe um numero
 * @param b - recebe um numero
 * @soma - soma a mais b 
 */


getElementById - se não esta definido no html- retorno é null

playcode.io - simulador de código

referencia do script no header - link defer.. para esperar carregar o body

<script defer > </script>

html precisa estar carregado para o javascript rodar depois, principalmente qd for no inicio do doc

let container = document.querySelector('.container')

.container - classe
'p' - tag p 
.container p = classe e tag
querySelector = pega o primeiro elemento encontrado

https://developer.mozilla.org/pt-BR/docs/Web/CSS/:nth-child


let container = document.querySelector('.container p:nth-child')
tabela com linhas pares e impares com cores diferentes

querySelectorAll('ul li')

utilizar mais esses 
- preferência id - um unico elemento
- query selector all - mais de um 

arquivos professor yan
https://drive.google.com/drive/folders/1Jc7Ly2QPKqCefpoqw5PdalY12kEExJ71?usp=sharing

https://developer.mozilla.org/pt-BR/docs/Web/CSS/:nth-child

document.querySelectorAll('.container p:nth-child(even)')
buscar elementos pares
buscar elementos impares - odd

no css
linhas impares
p:nth-child(odd){
    color:
}

elemento 2
p:nth-child(2){
    color:
}

pela contagem das tags p 
<p>1</p>
<p>2</p>

**APLICANDO ESTILOS E PROPRIEDADES**

<body>
<div id="myDiv">Texto</div>

<script>
    let myDiv = document.getElementById('myDiv')
    myDiv.style.color = 'red';
    myDiv.style.background = 'black';
</script>
</body>

atributo de evento - ex: onclick, hover --- usuario manipula na tela 

**ADICIONANDO E REMOVENDO CLASSES**

<body>
<style>
    .dark-mode {
        background-color: black;
        color: white;
    }
</style>

<div id="myDiv> Esta é a div </div>

<script>
let myDiv = document.getElementById('myDiv')
myDiv.classList.add('dark-mode)
</script>
</body>

classList - incluir uma classe... não esta definida na div



<body>
<style>
    .dark-mode {
        background-color: black;
        color: white;
    }
</style>
<div id="myDiv" class="dark-mode"> Esta é a div </div>
<script>
let myDiv = document.getElementById('myDiv')
myDiv.classList.remove('dark-mode)
</script>
</body>

vai remover a classe que esta ali atraves do class list



<body>
<style>
    .dark-mode {
        background-color: black;
        color: white;
    }
</style>
<div id="myDiv class="div-personalizada"> Esta é a div </div>
<button onclick="mudarTema()">Mudar Tema</button>
<script>
    function mudarTema(){
        let myDiv = document.getElementById('myDiv')
        myDiv.classList.toggle('dark-mode)
    }
</script>
</body>

toggle - vai e volta 


**CAPTURANDO E MODIFICANDO ATRIBUTOS**

fora id e class

<input placeholder="Digite seu nome">
<img alt="descrição da imagem caso não carregue" src="link">

getAttribute

<body>
<input id="meuInput" placeholder="Digite seu nome">
</body>
document.getElementById('myImage').getAttribute('placeholder')
captura id e depois placeholder - apenas busca


setAttribute

altera o valor 

let myImage = document.getElementById('myImage')
myImage.setAttribute('placeholder', 'novo valor')

document.getElementById('myImage').setAttribute('placeholder', 'novo valor')

