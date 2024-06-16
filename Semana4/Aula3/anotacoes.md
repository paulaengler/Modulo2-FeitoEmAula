***form para capturar dados
onsubmit - 
enviar os dados, mas as vezes precisa ser bloqueado, para enviar os dados via api


****Eventos de mouse:
quando o mouse passar pelo elemento - mouseover

***SIGNIFICA A MESMA COISA... UM OU OUTRO *****
<input id="meu-input" onkeydown="teclaPressionada(event)>
<script>
function teclaPressionada(event){
console.log(event)   
}

OU

<script>
    const meuInput = document.getElementById('meu-input')
    meuInput.addEventListener('keydown, () => {
    
    })

ACIMA ---- MESMA COISA ***********

event - interações com a experiência do usuário 
cada evento diferente, gera um event diferente


no console vai aparecer as propriedades, qual tecla foi clicada, por exemplo
event.key 
event.type
event.code

console.log(event.key)

if (event.key === 'Enter') {
    console.log ('usuário apertou o enter, seguir na aplicação')
}


***Eventos de Formulário: 
type=submit / na tag form
focus
onchange - tag input - se esta alterando o valor do input

** innerHTML

<button onclick="mostrarMsg"> Mostrar mensagem </button>
<div id="msg-container"></div>
<script>
function mostrarMsg() {
    const msgContainer = document.getElementById('msg-container');
    msgContainer.innerHTML = '<p>Mensagem adicionada com innerHTML</p>';
}

adicionar, remover ou modificar conteúdo html
receb como valor, uma outra tag html difinida entre strings
modifica o conteúdo da tag original

ou - troca pra crase e passa uma variável
msgContainer.innerHTML = `<p>Mensagem adicionada ${newDate()} com innerHTML</p>`;

innerhtml substitui todo o conteudo, não vai criando novas, uma embaixo da outra

***EXEMPLO

lista = [2,4,6]
let soma = 0

lista.forEach(num => {
    soma += num
    //soma = soma + num
})

console.log(soma)

msgContainer.innerHTML += `<p>Mensagem adicionada ${newDate()} com innerHTML</p>`;

usa += quando não quer perder o conteudo novo gerado, vai gerando uma lista, uma embaixo da outra

***CREATE ELEMENT***

é um método do DOM

body
    -div#container
        -divCriada

const elementoReferencia = document.getElementById('container)
elementoReferencia.appenChild(newElement)

sera adicionado dentro da div container, e nao no body, por isso precisa buscar o elemento


**** insertBefore ****

-- Ver sobre browser compatibilidade


