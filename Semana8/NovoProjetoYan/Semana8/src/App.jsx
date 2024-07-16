import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { getUsers } from '../src/services/web'

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    console.log('Componente iniciado')
    async function fetchData() {
      const response = await getUsers()
      setUsers(response)
    }
    
    fetchData()
  }, [])


  return (
    <>
    {/* {users.length} */}

  {users.map(
     user => <span key={user.id}>{user.name} - {user.email}</span>
  )}
    </>
)
}

export default App





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