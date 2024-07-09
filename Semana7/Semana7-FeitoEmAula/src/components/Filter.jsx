import { useEffect, useState } from "react"
import movies from './movies.json'

export function Filter(){

    const [contador, setContador] = useState(0)

    const [lista, setLista] = useState(movies)

    const [filtro, setFiltro] = useState('todos')


    // useEffect(() => {
    //     console.log('renderizou')
    // }, [contador])

      useEffect(() => {
        if(filtro == 'todos') {
            setLista(movies)
        } else {
            const novaLista = movies.filter(item => item.category == filtro)
            setLista(novaLista)
        }
    }, [filtro])

    return (
        <div>
            <span>Filtros: {contador} </span>
            <div>
                <button onClick={()=> setContador(prevState =>prevState + 1)}> Adicionar </button>
            </div>

            <div style={{marginBottom:32, display:'flex', gap: 16}}>
                <span>Filtros:</span>
                <button onClick={()=> setFiltro('todos')}>Todos</button>
                <button onClick={()=> setFiltro('filmes')}>Filmes</button>
                <button onClick={()=> setFiltro('series')}>Series</button>
                <button onClick={()=> setFiltro('animes')}>Animes</button>
            </div>

            <ul>
                {
                    lista.map((movie) => (
                        <li key={movie.title}>{movie.title} - ({movie.category})</li>
                    ))
                }
            </ul>
        </div>
    )
}

//se algo sofrer uma alteração, como efeito colateral, vai chamar o useEffect novamente