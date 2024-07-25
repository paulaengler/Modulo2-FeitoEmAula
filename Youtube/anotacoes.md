useContext
hook utilizado para consumir um context, da Context API
vamos precisar criar o contexto e o provedor(provider)
o contexto vai consumir ou alterar o dado
provedor indica pra quem o contexto esta disponivel
envolver os componentes que vao receber os dados,com o provider
fazer o uso do hook onde necessario, onde precisar consumir ou alterar os dados

quando tem rotas, compartilhar o contexto entre paginas

criar o projeto em vite:
npm create vite@latest

após, instalar:
npm i react-router-dom

*******

const Home = () => {
    return (
        <div> Home </div>
    )
}

OU

function Contact(){

    return (
        <>
        <div> Contact </div>
        </>
    )
}

********
react router --- cada rota é uma página da aplicação
npm i react-router-dom

no main, importar
import {createBrowserRouter, RouterProvider} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      { path: "/", element: <Home/>},
      { path: "/contact", element: <Contact/>}
    ],
  },
]);
array de objetos com as paginas
element - componente principal da pagina

pode ser escrito assim também, mas sem os filhos, nao reaproveita a estrutura
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  }
  {
 path: "/contato",
    element: <Contato/>,
  }
]);


https://dev.to/nascimento_/react-router-dom-3pp7#:~:text=deve%20ser%20usado,houver%20nenhuma%20rota%20de%20%C3%ADndice.

errorElement: <ErrorPage/>,
pagina de erro


<Link>
dessa forma a navegação fica mais fluida, altera na página apenas o que é diferente

