https://www.figma.com/design/03N1kcCxpOtDmaa1KrHu2F/Untitled?node-id=1-477&t=ewNUglIxlkJmA904-0

https://www.figma.com/proto/03N1kcCxpOtDmaa1KrHu2F/Shop365?node-id=1-477&t=utFRBqHbIt2S0n4r-1

api rest
comunicação do front end com o servidor

local storage
https://github.com/paulaengler/Modulo1-Semana6/blob/master/exercicio4.js
fetch
https://github.com/paulaengler/Modulo1-Semana6/blob/master/exercicio5.js

api
https://dummyjson.com/docs/products#products-all




async function getProduct() {
  const response = await fetch('https://dummyjson.com/products/1')

  const data = await response.json()

  console.log(data)
}

getProduct()



---- json para js
parse

js para json
stringify

const objJs = {
  name: "Amora",
  age: 0.5,
}
console.log(JSON.stringify(objJs))


const jsonEx = '{"name":"Amora","age":0.5}'
console.log(JSON.parse(jsonEx))




async function addProduct(product) {
  const response = await fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json',
    }),
    body: JSON.stringify(product)
  })

  const data = await response.json()

  console.log(data)
}


addProduct({
  title: 'Macbook M24 - Modelo novinho',
  price: 15000,
})

async function updateProduct(idProduct, product) {
  const response = await fetch('https://dummyjson.com/products/' + idProduct, {
    method: 'PUT',
    headers: new Headers({
      'content-type': 'application/json',
    }),
    body: JSON.stringify(product)
  })

  const data = await response.json()

  console.log(data)
}

async function deleteProduct(idProduct) {
  const response = await fetch('https://dummyjson.com/products/' + idProduct, {
    method: 'DELETE',
  })

  const data = await response.json()

  console.log(data)
}



--- script.js aula 

async function getAllProducts() {
  const response = await fetch('https://dummyjson.com/products')

  const data = await response.json()

  console.log(data)
}

async function getProduct(idProduct) {
  const response = await fetch('https://dummyjson.com/products/' + idProduct)

  const data = await response.json()

  console.log(data)
}

async function addProduct(product) {
  const response = await fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json',
    }),
    body: JSON.stringify(product)
  })

  const data = await response.json()

  console.log(data)
}

async function updateProduct(idProduct, product) {
  const response = await fetch('https://dummyjson.com/products/' + idProduct, {
    method: 'PUT',
    headers: new Headers({
      'content-type': 'application/json',
    }),
    body: JSON.stringify(product)
  })

  const data = await response.json()

  console.log(data)
}

async function deleteProduct(idProduct) {
  const response = await fetch('https://dummyjson.com/products/' + idProduct, {
    method: 'DELETE',
  })

  const data = await response.json()

  console.log(data)
}
// async function iniciarProcesso() {
//   const product = await getProduct()
//   // ..
// }

const objJs = {
  name: "Amora",
  age: 0.5,
}

// const jsonEx = "{\"name\":\"Amora\",\"age\":0.5}"

// console.log(JSON.parse(jsonEx))
// console.log(JSON.stringify(objJs))

// addProduct({
//   title: 'Macbook M24 - Modelo novinho',
//   price: 15000,
// })
// updateProduct(1, {
//   title: 'Meu produto atualizado',
//   description: 'Lorem impsum, mussum.',
//   price: 0.25,
// })  

// deleteProduct(1)

getAllProducts()



----- products.js

async function getAllProducts() {
  const response = await fetch('https://dummyjson.com/products')

  const data = await response.json()

  return data
}

/**
 * Função responsavel por criar elemento de produtos
 */
function createElementProduct() { }


async function renderProducts() {
  const products = await getAllProducts()
}

--- products.js

const productListElement = document.querySelector('.products')

async function getAllProducts() {
  try {
    const response = await fetch('https://dummyjson.com/products?limit=10')

    const data = await response.json()

    return data.products

  } catch (error) {
    console.log(error)
    return []
  }
}

/**
 * Função responsavel por criar elemento de produtos
 */
function createElementProduct(product) {
  /**
   * div => .product-card
   *  --- strong => titulo
   *  --- span => valor
   *  --- button => adicionar ao carrinho
   */
  const productCardElemento = document.createElement('div')
  productCardElemento.classList.add('product-card')

  const tituloElemento = document.createElement('strong')
  tituloElemento.innerHTML = product.title

  const priceFormatted = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)

  const valorElemento = document.createElement('span')
  valorElemento.innerHTML = priceFormatted

  const buttonElemento = document.createElement('button')
  buttonElemento.innerText = "Adicionar"

  productCardElemento.appendChild(tituloElemento)
  productCardElemento.appendChild(valorElemento)
  productCardElemento.appendChild(buttonElemento)

  return productCardElemento;
}


async function renderProducts() {
  const products = await getAllProducts()
  // console.log(products)
  productListElement.innerHTML = ""

  products.forEach(product => {
    const productItemElemento = createElementProduct(product)
    productListElement.appendChild(productItemElemento)
  })
}

renderProducts()


--cart.js







--- LOCALSTORAGE

localStorage.setItem('my cat', 'tom')

getItem - ler
removeItem - chave
clear - remove todos

armazena em formato de string


script.js
async function getAllProducts() {
  const response = await fetch('https://dummyjson.com/products')

  const data = await response.json()

  console.log(data)
}

async function getProduct(idProduct) {
  const response = await fetch('https://dummyjson.com/products/' + idProduct)

  const data = await response.json()

  console.log(data)
}

async function addProduct(product) {
  const response = await fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json',
    }),
    body: JSON.stringify(product)
  })

  const data = await response.json()

  console.log(data)
}

async function updateProduct(idProduct, product) {
  const response = await fetch('https://dummyjson.com/products/' + idProduct, {
    method: 'PUT',
    headers: new Headers({
      'content-type': 'application/json',
    }),
    body: JSON.stringify(product)
  })

  const data = await response.json()

  console.log(data)
}

async function deleteProduct(idProduct) {
  const response = await fetch('https://dummyjson.com/products/' + idProduct, {
    method: 'DELETE',
  })

  const data = await response.json()

  console.log(data)
}
// async function iniciarProcesso() {
//   const product = await getProduct()
//   // ..
// }

const objJs = {
  name: "Amora",
  age: 0.5,
}

// const jsonEx = "{\"name\":\"Amora\",\"age\":0.5}"

// console.log(JSON.parse(jsonEx))
// console.log(JSON.stringify(objJs))

// addProduct({
//   title: 'Macbook M24 - Modelo novinho',
//   price: 15000,
// })
// updateProduct(1, {
//   title: 'Meu produto atualizado',
//   description: 'Lorem impsum, mussum.',
//   price: 0.25,
// })  

// deleteProduct(1)

getAllProducts()

- products.js
import { addProductToCart } from './cart.js'

const productListElement = document.querySelector('.products')

async function getAllProducts() {
  try {
    const response = await fetch('https://dummyjson.com/products?limit=10')

    const data = await response.json()

    return data.products

  } catch (error) {
    console.log(error)
    return []
  }
}

/**
 * Função responsavel por criar elemento de produtos
 */
function createElementProduct(product) {
  /**
   * div => .product-card
   *  --- strong => titulo
   *  --- span => valor
   *  --- button => adicionar ao carrinho
   */
  const productCardElemento = document.createElement('div')
  productCardElemento.classList.add('product-card')

  const tituloElemento = document.createElement('strong')
  tituloElemento.innerHTML = product.title

  const priceFormatted = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)

  const valorElemento = document.createElement('span')
  valorElemento.innerHTML = priceFormatted

  const buttonElemento = document.createElement('button')

  /** Evento p/ adicionar no carrinho de compras */
  buttonElemento.addEventListener('click', () => addProductToCart({
    id: product.id,
    title: product.title,
    price: product.price
  }))

  buttonElemento.innerText = "Adicionar"

  productCardElemento.appendChild(tituloElemento)
  productCardElemento.appendChild(valorElemento)
  productCardElemento.appendChild(buttonElemento)

  return productCardElemento;
}


async function renderProducts() {
  const products = await getAllProducts()
  // console.log(products)
  productListElement.innerHTML = ""

  products.forEach(product => {
    const productItemElemento = createElementProduct(product)
    productListElement.appendChild(productItemElemento)
  })
}

renderProducts()

- main.js
import "./products.js" 

