import { Link } from "react-router-dom"
import Sidebar from "../components/Sidebar/Sidebar"
import '../components/Sidebar/sidebar.css'

function Home() {
    return (
        <>
            <Sidebar></Sidebar>
            <h1>Home</h1>
            <Link to='/bicicletas'>Bicicletas</Link>
           
        </>
    )
}

export default Home



{/* <a href= > Não é usado no React, usa a tag Link  
    sincronização do histórico, prevenção de recarregamento... 
    não é a tag link do index.html

    para Link interno - aparece um link azul Bicicletas
    enviar para uma rota que exista

     <a href='link externo'></a> para link externo pode usar
    
    https://reactrouter.com/en/main/components/link

    */}