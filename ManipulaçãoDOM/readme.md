--- VIDEO 1 ----- 


VASCULHANDO O DOCUMENT - OBJETO

-Abre uma página
-clica em inspecionar
-abre a aba console
-limpa tudo
-digita document (vai selecionar toda a pagina)
Document - é todo o arquivo
-document.location (vai trazer a url do site)
-document.URL
-document e enter
-vai trazer o arquivo renderizado, ja em html
- console.dir(document)
- traz todas as propriedades e funcionalidades
-document.head 
- vai trazer o que tem no head
- console.dir(document.head)
-traz as propriedades do head
-document.links
-traz os links do site
-document.images

BUSCANDO E SELECIONANDO OS ELEMENTOS

-inspecionar
-aba elements
-ve quais sao os elementos

- na aba console
-document.getElementById("nome do elemento")
ex: <div id="notion-app"></div>
- se achar, vai trazer renderizado - pronto
- console.dir(document.getElementById("notion-app"))
- traz todas as propriedades

-document.getElementByClassName("nome da classe")
retorna uma coleção html - HTMLCollection

let exemplo = document.getElementByClassName("nome da classe")
enter
define uma variavel para essa coleção

para acessar um elemento dentro da coleção
exemplo[0]
nome da variavel e a posição, começa em zero


busca pela tag do html - img, iframe, div, 
document.getElementsByTagName("a")
responde html colection

---- querySelector ----- 
coloca em formato do css
classe tem o ponto na frente
document.querySelector(".exemplo")
classe exemplo

id precisa do # antes do nome
document.querySelector("#nome")
id nome

querySelector - retorna um elemento

document.querySelectorAll("")
retorna todos - retorna node list

forEach não funciona com html colection, por isso dar preferencia para querySelector,
que retorna uma node list

todas as tags a

let as = document.querySelectorAll("a")
coloca o retorno dentro da variavel as
as.forEach(a => console.log(a))
vai imprimir todas as tags a


MANIPULANDO O CONTEÚDO

let share = document.querySelector(".notion")
entre aspas - nome da classe

share.textContent
traz o texto daquela classe, o que tem dentro dele

mudar o que tem dentro dele
share.innerText = "Launch"

colocar um html dentro dele
share.innerHTML = "<h1>Exagerado</h1>"

innerText e innerContent - vai responder o texto
innerHTML vai responder o html

ALTERANDO ESTILOS

let app = document.querySelector("notion") - nome da classe

.style.propriedade (camelCase - não usar igual Css que não funciona)
app.style.backgroundColor = "white"

app.style.border = "7px solid red"

.classList
    .add()
    .remove()
    .toggle()


NAVEGANDO PELOS ELEMENTOS

frame seria a variavel que foi definida no querySelector

frame.children
traz os filhos

frame.children[0]
filhos na posicao zero

frame.children[0].style.backgroundColor = "yellow"

frame.parentNode 
traz o pai

frame.parentNode.style.backgroundColor = "white"
frame.parentNode.innerText = "alooooooo"


let frame = document.querySelector(."notion-frame") 
notion é a classe
frame.parentElement

parentNode - o document é o parent - elemento pai
parentElement não é filho do document

console.log(document.documentElement.parentNode === document);  // true
console.log(document.documentElement.parentElement === document);  // false



**NOVA PLAYLIST**

document.getElementsByName('nome do name')[2].innerHTML = "novo texto .... ";

document.getElementsClassName('nome da classe').innerText = " novo texto ... ";

document.getElementsByTagName('h1')[1].innerHTML = "elemento posição 1 .. novo texto..";

h1, p, div - tag name

//querySelector

document.querySelector('#id').innerHTML = "<b>conteudo novo</b>"
id é #

document.querySelector('p').innerHTML = "<b>conteudo do primeiro p </b>"
tag 

document.querySelector('.nomedaclasse').innerText= "conteudo da classe"
classe é . (ponto)

//querySelectorAll

document.querySelectorAll('#id')[2].innerText= "novo texto na posição 2 - terceiro item "


hasAttribute- pergunta se tem algum atributo

document.getElementById('idQualquer').hasAttribute('class')
traz o resultado: true ou false

document.querySelector('.classe').hasAttribute('id')
true ou false

getAttribute - pergunta se tem e traz o valor que esta dentro da classe

var atributo = document.getElementById('idQualquer').getAttribute('class')

setAttribute - altera
var atributo = document.getElementById('idQualquer');

aplicando um estilo direto

atributo.setAttribute('style', 'background: red')


scrollTo
leva para algum lugar na página 

function topo(){
    window.scrollTo ({
        top: 0,
        left:0,
        behavior:'auto',
    })
}

createElement

-- Criar um elemento <li> e um nó de texto
var elemento = document.createElement('li');

--criar um nó do texto
var texto = document.createTextNode('item da lista adicionado')

elemento.appendChild(texto)

--recuperando o elemento lista e anexado o elemento li ao final da lista

var lista = document.getElementByTagName('ul')[0]
lista.appendChild(elemento)



insertBefore
<ul>
    <li> item 1 </li>
    <li> item 2 </li>
    <li> item 3 </li>
</ul>

var lista = document.getElementByTagName('ul')[0];
var itens = lista.getElementByTagName('li')
criando o elemento
var elemento = document.createElement('li')
elemento.textContent = "outro item"
inserindo um valor em posição específica
lista.insertBefore(elemento, itens[3])



removeChild
lista.removeChild(itens[2])





criando a tag p
var novoParagrafo = document.createElement("p")

criando o texto para inserir na tag p 
var texto = document.createTextNode("este é o conteudo do novo paragrafo")

novoParagrafo.appendChild(texto)

console.log(novoParagrafo)