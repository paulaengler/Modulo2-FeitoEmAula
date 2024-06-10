const inputElement = document.querySelector('input')

console.log(inputElement)

inputElement.disabled = true /*desabilita o input */

/* class=list tag li */

const itensDaLista = document.querySelectorAll('.list li')

console.log(itensDaLista)


itensDaLista.forEach((item, indice) => {
    item.innerHTML = " Item " + (indice + 1)
})

/* indice mais 1 pq começa em zero - para alterar os elementos */


const buttonForm = document.querySelector('form button')
console.log(buttonForm)


buttonForm.innerHTML = "<strong>testando...</strong>"
buttonForm.innerText = "testando..."

/* no inner text se colocar uma tag, vai aparecer tudo, só no html some a tag */

var interesses = []

buttonForm.addEventListener('click', (event) => {
    const value = inputElement.value
    inputElement.value = "" //reseta o valor pra zero, apaga o que foi digitado no input
    console.log(value)

    interesses.push(value)
    console.log(interesses)
    //console.log('clicou')
})

/* o push vai formando uma lista dos interesses que foram inseridos */ 

//map - percorre cada item
//join = 
