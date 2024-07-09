import { useState } from "react";

export function Contador(){
    const [contador, setContador] = useState(0)

    function handleAdd(){
        setContador(contador + 1)
    }

    return (
        <div>
            <p> 
                Valor: {' '}
                <strong>{contador}</strong>
            </p>          
            <button onClick={handleAdd}>Adicionar</button>
        </div>
    )
}


// function handleAdd(){
//     setContador(contador + 1)
// }


// pode passar a função handleAdd 
// export function Contador(){
//         const [contador, setContador] = useState(100)
    
//         return (
//             <div>
//                 <p> 
//                     Valor: {' '}
//                     <strong>{contador}</strong>
//                 </p>          
//                 <button onClick={()=> setContador(contador + 1)}>Adicionar</button>
//             </div>
//         )
//     }




// funciona, mas forma acima fica melhor
// export function Contador(){
//     const contador = useState(0)

//     return (
//         <div>
//             <p> 
//                 Valor: {' '}
//                 <strong>{contador}</strong>
//             </p>          
//             <button onclick={()=> contador[1](contador[0] + 1)}>Adicionar</button>
//         </div>
//     )
// }