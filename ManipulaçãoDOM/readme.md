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


