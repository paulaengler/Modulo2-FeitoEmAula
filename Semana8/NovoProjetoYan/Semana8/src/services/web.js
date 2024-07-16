export async function getUsers() {
    const response = await fetch('http://localhost:3000/users', {
        method: 'GET'
    })

    const data = await response.json()

    console.log(data)
    return data
}



// fetch, recebe uma string, que é um endpoint e retorna um dado
// objetivo, é pegar o db.json e trazer todo o array de usuarios
// await fetch, para aguardar a resposta, pois pode levar 1,2 segundos
// quando usa o await, precisa do async 
// const data - converte a resposta para json
// codigo padrao para o fetch 
// chamada de api para o endpoint que foi construindo por meio do json-server
// para chamar esse funcao construida em algum componente, precisa do export 

