//por id - aspas e nome
const paragrafo = document.getElementById("paragrafo")

console.log(paragrafo)

//const itemsElementos = document.getElementsByClassName("item")

//traz coleção de elementos html
//console.log(itemsElementos)
//console.log(itemsElementos[0])

//pelo class name, esta considerando como objeto e nao array, por isso o query seria mais interessante

//ver como é considerado - array, objeto, coleção...
//console.log(typeof itemsElementos)

//classes .nome 
//id #nome
//const itemsElementos = document.querySelectorAll(".item")

console.log(document.querySelectorAll('body ul#lista li.item'))

//listas e div
console.log(document.querySelectorAll('body ul#lista .item'))



//Projeto lista de interesses
const inputElemento = document.querySelector('input')
const buttonElemento = document.querySelector('button')
const listaElemento = document.querySelector('.list')


//registrar os eventos
buttonElemento.addEventListener('click', () => {
    console.log('funcionou o click')
})

buttonElemento.addEventListener('click', () => {
    const valorInput = inputElemento.value
    console.log(valorInput)
})

buttonElemento.addEventListener('click', () => {
    const valorInput = inputElemento.value
    if (valorInput) {
        const itemElemento = document.createElement('li')
        itemElemento.innerText = valorInput
        console.log(itemElemento)
    } else {
        alert('Informe um valor')
    }
})

//vai inserir um item a mais na lista - coloca como filho, inclui por ultimo
//para incluir como primeiro filho - .preprend

const interesses = []

//registrar os eventos
buttonElemento.addEventListener('click', () => {

    const valorInput = inputElemento.value
    if (valorInput) {
        const itemElemento = document.createElement('li')
        itemElemento.innerText = valorInput
        listaElemento.appendChild(itemElemento)


        const checkElemento = document.createElement('input')
        checkElemento.type = "checkbox"

        itemElemento.prepend(checkElemento)
        //prepend - vai criar uma caixinha de checkbox

        interesses.push(valorInput)

        /*interesses.push({
        id: Date.now(),       --- id unico, criou referente a hr exata, se inserir 2, nunca sera o mesmo
        name: valorInput
    }) */

    } else {

        alert('Informe um valor')

    }
})

/* comentarios - whats grupo turma
// Seleciona o elemento de input, botão e a lista no documento
const inputElement = document.querySelector('input');
const buttonElement = document.querySelector('button');
const listaElemento = document.querySelector('.list');

// Inicializa um array para armazenar os interesses
const interesses = [];

/**
 * Função para lidar com o clique no item da lista
 * @param {MouseEvent} event - Isso é um evento de click

function ligarAoClicarNoItem(event) {
    console.log(event.target); // Loga o elemento que foi clicado
    const elementoAtual = event.target; // Armazena o elemento que foi clicado
    const interesseId = elementoAtual.dataset.interesseId; // Pega o ID do interesse do dataset do elemento

    // Atualiza o array de interesses, marcando o item como checked se o ID coincidir
    interesses.map(item => {
        if (item.id === interesseId) {
            return {
                ...item,
                checked: true
            };
        }
        return item;
    });

    // Adiciona a classe 'riscado' ao elemento clicado, para aplicar algum estilo (por exemplo, riscar o texto)
    elementoAtual.classList.add('riscado');
}

// Registra o evento de clique no botão
buttonElement.addEventListener('click', () => {
    const valorInput = inputElement.value; // Pega o valor do input

    if (valorInput) {
        // Cria um objeto com os dados do novo interesse
        const itemData = {
            id: Date.now(), // Usa a data atual como ID único
            name: valorInput,
            checked: false
        };

        // Cria um novo elemento de lista e um checkbox
        const itemElemento = document.createElement('li');
        const checkElement = document.createElement('input');
        checkElement.type = "checkbox"; // Define o tipo do input como checkbox

        itemElemento.innerText = valorInput; // Define o texto do item de lista como o valor do input
        itemElemento.dataset.interesseId = itemData.id; // Define um dataset com o ID do interesse no item de lista
        itemElemento.prepend(checkElement); // Adiciona o checkbox no início do item de lista

        // Adiciona o evento de clique ao novo item de lista
        itemElemento.addEventListener('click', ligarAoClicarNoItem);

        // Adiciona o novo item de lista à lista (como último filho)
        listaElemento.appendChild(itemElemento);

        // Adiciona o novo interesse ao array de interesses
        interesses.push(itemData);

        // Reseta o valor do input após adicionar o item
        inputElement.value = '';
    } else {
        // Alerta o usuário se o input estiver vazio
        alert('Informe um valor.');
    }
})

*/



/* JSDoc 

auto-complete
verificação de tipos
manutenção

*/

/**
 * @param {MouseEvent} event Isso é um evento de click
 */
function lidarAoClicarNoItem(event){
    console.log(event.target)
}

handleCheck()

//dentro do buttonelement.addEventListener('click', () => {})
itemElemento.addEventListener('click', lidarAoClicarNoItem)

/* no html
 <li data-interesse-id="lab365">ola</li>
 
 pode criar customizado
 
 no console do navegador
 document.querySelector('.list li).dataset

 id do interesses push
 atributo personalizado, para incluir qualquer informação
 dataset personalizado - informações 

 .setAttribute
 inputCheckElement.setAttribute('checked', 'true')
 nome e valor 
 */