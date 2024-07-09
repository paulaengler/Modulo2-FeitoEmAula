import { useEffect, useState } from "react"

export function News(){

    const [title, setTitle] = useState(null)

    async function getNews() {
    const response = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?destaque=0')
    const data = await response.json()

    setTitle(data.items[0].titulo) }


    useEffect(()=> {    
       getNews()
    }, [])
    

return (
    <div>
        <strong> Noticia do dia </strong>
            <p>
                {title}
            </p>         
       
    </div>
    )
}

// export function News(){

//     const [carregando, setCarregando] = useState('')
//     const [title, setTitle] = useState(null)

//     async function getNews() {
//     try {    
//     const response = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?destaque=0')
//     const data = await response.json()

//     setTitle(data.items[0].titulo) 
//     } catch (error) {
//         alert("Erro ao carregar notícia")
//     } finally {
//         setCarregando(false)
//     }

//     useEffect(()=> {    
//        getNews()
//     }, [])
//     }

// return (
//     <div>
//         <strong> Noticia do dia </strong>
//         { 
//         carregando ? <strong> Carregando ...  </strong> : (
//             <p>
//                 {title}
//             </p>
//         )
//         }           
       
//     </div>
//     )
// }