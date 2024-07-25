import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Home = () => {

    const {theme, toggleTheme} = useContext(ThemeContext)

    return (
        <div>
            <h1> Página inicial </h1>
            <button onClick={toggleTheme}> Mudar Tema </button>
            <p> O tema atual é: {theme} </p>
        </div>
    )
}

export default Home


// importar o useContext e o contexto, que no caso é o ThemeContext

//para pegar os valor do theme e toggle, criar aquela constante e buscar o contexto
// que é o (ThemeContext) atraves do useContext

