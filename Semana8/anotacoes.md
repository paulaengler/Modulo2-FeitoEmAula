Aula 1

ao enviar o conteudo em um formulário, se alterar o endereço do localhost, tem que usar o prevent default

***Spread - criar copia sem mudar o original
copia e adição de novo item

const pessoa = {
    nome: 'Paula',
    email: 'paula@gmail.com'
}

console.log{...pessoa, idade:30}

copia o pessoa, e inclui o idade 30

**Codigo nicholas
import { useState } from "react"

export function ExercicioTres() {
    const [texto, setTexto] = useState('')
    const [lista, setLista] = useState([]) // [ '', '']

    function handleSubmit(event) {
        event.preventDefault()

        if(texto) {
            setLista(listaAnterior => {
                return [...listaAnterior, texto]
            })
        }
    }

    return (
        <div className="container mt-4">
            <form onSubmit={handleSubmit} className="mb-4">
            <input type="text" className="form-control" onChange={event => setTexto(event.target.value)} />
                <button className="btn btn-primary mt-4">Cadastrar</button>
            </form>

            <p>
                <strong className="block mt-4">Lista:</strong>
            </p>

            <ul>
                {
                    lista.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
        </div>



**** useState
principal uso - com input

useRef - acessar diretamente elementos dom
nao precisa usar o getelementbyid

useEffect - efeitos colaterais em componentes- busca de dados (api), receber notificação qd iniciou (montagem), variavel mudou (atualização)..

**Codigo yan

const isModalOpen = false

console.log(isModalOpen ? 'Exibe o modal' : 'Oculta o modal')
if (isModalOpen){
  console.log('Exibe o modal')
} else {
  console.log('Oculta o modal')
}


console.log(isModalOpen && 'Exibe modal')
if (isModalOpen) {
  console.log('Exibe modal')
}

*** useEffect(() => {vai executar}, [])
sao 2 parametros

**
Quem for criar um novo projeto:

npm create vite@latest

Dar nome ao projeto
Selecionar React
Selecionar Javascript

***

pasta components
    pasta sidebar
    pasta header

pasta pages
    pasta login
    pasta home

pasta services
    web.js
    api.js

Atomic Design - atomos>moleculas>organismos>template>pagina
constroi do menor para o maior



Aula 2

https://github.com/FuturoDEV-Trip/react_boilerplate

https://getbootstrap.com/docs/5.3/getting-started/vite/

https://react-bootstrap.netlify.app/

https://getbootstrap.com/docs/5.3/components/buttons/


SPA - single page application
1 html apenas
no main jsx puxa o root- class da div do html e app jsx renderiza 
carrega todo o javascript de uma vez só
toda navegação depois é mais fluida, pq ja esta tudo carregado

ahref não é utilizado

***

REACT ROUTER DOM
é uma lib - library - biblioteca
6.25.1 - Versão atual
olhar a versão ao pesquisar sobre a documentação ou algum video

https://reactrouter.com/en/main

https://www.npmjs.com/package/react-router-dom


terminal do projeto - abrir na pasta do projeto
instalar a biblioteca através do comando:
npm i react-router-dom
devera aparecer no package.json dependences

facilita o gerenciamento de rotas

Componentes principais:
Routes
Route
Link/NavLink - substitui tag a 
Redirect

*** não mexer no main.jsx ***

para configurar, mexer no app.jsx

npm install --save-dev @types/react-router-dom

- Para rodar a aplicação
npm install
npm run dev

vai trazer o localhost
copiar no navegador
endereço do localhost/login
da rota criada


no react pode usar uma função para retornar uma tag
const estaAutenticado = true
function welcome(){
    if (estaAutenticado) {
    return <p>Bem vindo</p>
}
    return <p>Faça login</p>
}



 https://reactrouter.com


 componentes-header,footer,main
 pages- login, home, cadastro