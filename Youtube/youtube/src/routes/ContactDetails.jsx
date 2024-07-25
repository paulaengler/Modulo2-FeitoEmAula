import { useParams, useNavigate } from "react-router-dom";


const ContactDetails = () => {

    const {id} = useParams();

    const navigate = useNavigate();

    const handleContact = () => {
        console.log("contato enviado")
        return navigate("/")
    }

    return (
        <div> 
            <h1> Exibindo mais informações do contato: {id} </h1>     
            <button onClick={handleContact}> Enviar mensagem </button>       
        </div>
    )
}

export default ContactDetails


//useParams - consegue extrair as informações que vem da url
//useNavigate - permite a navegação entre paginas, na parte da logica
//Ex: enviou um formulario e quer redirecionar o usuario pra home

