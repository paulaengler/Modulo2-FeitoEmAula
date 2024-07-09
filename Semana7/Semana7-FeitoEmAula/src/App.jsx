// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'
import { Contador } from './components/Contador'
import { Item } from './components/Item'
import { Soma } from './components/Soma'
import { Filter } from './components/Filter'
import { News } from './components/News'



export default function App(){

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')

  function handleRemove(id){
    console.log(id)
  }

  function onSubmit(){
    const data = {
      nome,
      email
    }
    console.log(data)
  }


  return (
  <>

    <div>
      <Item/>

      {
        Array.from({length:10}).map((item, index) => {
        return <button key={index} onClick={()=>handleRemove(index)}>{index} - Deletar</button>
        })      
      }
      

    <Soma numero1={10} numero2={30}/>  

    <Soma numero1="10" numero2="30"/>  

    <br/>

    <Contador/>
    <Contador/>

    </div>

    <h1>Nome é: {nome}</h1>

    <input type="text" placeholder="Informe o seu nome" onChange={event => setNome(event.target.value)}/>

    <p>Email: {email}</p>

    <input type="text" placeholder="Informe o seu email" onChange={event => setEmail(event.target.value)}/>

    <button onClick={onSubmit}>Enviar dados</button>


    <Filter/>

    <News/>
  </>
  )
}

// export default App



//onChange - sempre que mudar, vai chamar o estado - useState

//chamar 2 <Contador> vão funcionar isoladamente

//passar arrow function para registrar o id, apenas qd clicar, se não passar, ja pega automatico antes de clicar


// vai somar --- <Soma numero1={10} numero2={30}/>  
// vai concatenar --- <Soma numero1="10" numero2="30"/>
//para ter um controle disso, instala a biblioteca prop-types



// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }


