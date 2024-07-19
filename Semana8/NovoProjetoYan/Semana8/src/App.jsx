import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import './App.css'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Bicicletas from './pages/Bicicletas'


function App() {

const isAuthenticated = true

function loginRedirect(componente){
  if (isAuthenticated){
    return <Navigate to='/' replace />
  }
  return componente
}

return (
      <>
   
      <BrowserRouter>
      <Routes>

        <Route path='/login' element={loginRedirect(<Signin />)}/>
        <Route path='/cadastro' element={loginRedirect(<Signup />)}/>

      {/* <Route path='/login' Component={Signin}/>
      <Route path='/cadastro' Component={Signup}/> */}

        {isAuthenticated ? 
        (
          <>
          <Route path='/' Component={Home}/>
          <Route path='/bicicletas' Component={Bicicletas}/>
          </>
        )
      : (
        <Route path='*' element={<Navigate replace to='/login' />} />
      )
      }
          
      </Routes>
      </BrowserRouter>

    </>
)
}

export default App





// ***AULA 1**** - foi comentado para configurar a aula 2
// function App() {

//   const [users, setUsers] = useState([])

//   useEffect(() => {
//     console.log('Componente iniciado')
//     async function fetchData() {
//       const response = await getUsers()
//       setUsers(response)
//     }
    
//     fetchData()
//   }, [])


//   return (
//     <>
//     {/* {users.length} */}

//   {users.map(
//      user => <span key={user.id}>{user.name} - {user.email}</span>
//   )}
//     </>
// )
// }

// export default App




// function App() {

//   const [users, setUsers] = useState([])

//   useEffect(() => {
//     console.log('Componente iniciado')
//     async function fetchData() {
//       const response = await getUsers()
//       setUsers(response)
//     }
    
//     fetchData()
//   }, [])

//   //chamar api quando o componente for inicializado useState e useEffect

// return (
//   <>
//   {users.length}
//   </>
// )

// como só tem 1 item no arquivo db.json - traz o numero 1 no meio da tela

// {users.map(
//   user => <span key={user.id}>{user.name} - {user.email}</span>
// )}
// printa na tela o name e email
// span sempre precisa de key


// AULA 2 ******

// function 

// const estaAutenticado = false
// function welcome(){
//   if (estaAutenticado) {
//   return <p>Bem vindo</p>
// }
//   return <p>Faça login</p>
// }

// return (
//   <>

//     {welcome()}
//     </>

      // {/* 
        
      //   BrowserRouter as Router (**switch)- deve estar assim no import tambem (outra forma de escrever)
      //   poderia escrever Router na tag / ou entao browserRouter
        
      //   ROTAS
      //     -rota /home pages/Home
      //     -rota pages/Home 
      //     -rota /configuracoes page/Configuracoes
      // */}

      // *******

      // const isAuthenticated = false

      // {isAuthenticated ? 
      //   (
      //     <>
      //     <Route path='/' Component={Home}/>
      //     </>
      //   )
      // : (
      //   <Route path='*' element={<Navigate replace to='/login' />} />
      // )
      // }

      // se estiver autenticado, acessa a Home, se não estiver, redireciona para login 
      // o asterisco do path 

      // *******

      // function loginRedirect(componente){
      //   if (isAuthenticated){
      //     return <Navigate to='/' replace />
      //   }
      //   return componente
      // }

      // se estiver autenticado, vai pra /, que é Home
      // se nao estiver autenticado, retorna o componente, se tentou /login, vai ter Signin,
      // se tentou o /cadastro, vai ter o Signup

      // *****

      // quando quiser inserir uma pagina quando estiver autenticado, incluir nessa parte abaixo:

      // {isAuthenticated ? 
      //   (
      //     <>
      //     <Route path='/' Component={Home}/>
      //     <Route path='/bicicletas' Component={Bicicletas}/>
      //     </>
      //   )

      // ********
      // quando tem rotas que nao precisa do login, pode colocar fora daquele isAuthenticated

      // <BrowserRouter>
      // <Routes>

      //   <Route path='/login' element={loginRedirect(<Signin />)}/>
      //   <Route path='/cadastro' element={loginRedirect(<Signup />)}/>

       // ********
      //  Declaração dessa forma, tem diferença de performance (element é mais rapido):
      //   Component={Home}
      //   element={<Signin/>}

        // ********


         // ********
