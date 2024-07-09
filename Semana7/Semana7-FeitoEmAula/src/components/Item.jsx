
export function Item(){
    return (
    <>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
    </>
    )
}

//pode usar assim, com o React.fragment, ou então tag vazia <></>
//deve importar o react - import React from "react"
// export function Item(){
//     return (
//     <React.Fragment>
//         <li>item 1</li>
//         <li>item 2</li>
//         <li>item 3</li>
//     </React.Fragment>
//     )
// }




// Não se cria lista dessa forma, precisa englobar dentro de um elemento
// export function ListaItem(){
//     return {
//         <li>item 1</li>
//         <li>item 2</li>
//         <li>item 3</li>
//     }
// }