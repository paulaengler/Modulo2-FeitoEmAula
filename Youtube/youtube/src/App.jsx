import './App.css'
// outlet - reaproveitamento de estrutura 
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'

function App() {

  const {theme} = useContext(ThemeContext);

  return (
    <>
    <div className={`App ${theme === "dark" ? "dark-theme" : ""}`}>
      <Navbar/>
      <Outlet/>
      </div>
    </>
  )
}

export default App



//outlet é importando e inserido no return

//classname da div -- se o tema for dark, colocar a classe dark-theme, senão vazio
{/* <div className={`App ${theme === "dark" ? "dark-theme" : ""}`}>
import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'
const {theme} = useContext(ThemeContext); 
todo esse codigo para importar o valor do theme aqui no app.jsx*/}