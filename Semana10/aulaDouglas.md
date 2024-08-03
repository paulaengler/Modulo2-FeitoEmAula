criou projeto com vite
npm install json-server --save-dev
na raiz - database.json
cria um array de usuarios e locais
rota /usuarios
{
    "usuarios":[]
}
subir servidor deixar disponivel a fake api
npx json-server database.json (nome do arquivo)
criou endopoint localhost:3000/usuarios
abre outro terminal
npm run dev

tirou o deletar o local

router dom permite mais de uma tela , varias interligadas

na main ja esta chamando o index.css
nao precisaria chamar no app.jsx


app.jsx
<form>
<input></input>
<select>
    <option valeu=""></option> //pode passar vazio, pra começar vazio, senao pega o primeiro
    <option valeu="CE">Ceará</option>
    <option valeu="SC">Santa Catarina</option>
    <option valeu="PR">Paraná</option>
</select>
<textarea placeholder="Digite a observacao"></textarea>
<button type="submit">Cadastrar</button>
</form>

botao deve ficar dentro da tag form
para que o botao funcione, deve estar dentro da tag form
onSubmit - evento que acontece toda vez que dispara o formulário, qd clicar no botao

tag form, pagina toda de cadastro.. desde h1 ate o botao
tag form - pagina login - efetue o seu login até final do botao cadastra-se
botao cadastrar-se = tag link 

hook form
import {useForm} from "react-hook-form"

function App()

const {register, watch} = useForm()

//console.log(watch())  --- mostra tudo o que esta sendo salvo

desestrutura o useForm - para pegar só o que importa, senão passaria varios valores
funcao register - registar o elemento do formulário

<input type="text"  placeholder="" {...register('nome')} />
ta registrando esse input com o nome 'nome'
cada input deve ter um valor, depois do register - esse valor é unico
<select {...register('uf')}>
<textarea {...register('obs')}>

o register, equivale a essas 3 linhas == faz a mesma coisa
const [nome, setNome] = useState('')
function handleInput(event){}
<input value={name} onChange={(event) => setNome(event.target.value)}/>


funcao que vai lidar com a submissao do formulario

<form onSubmit={}>

on - evento que acontece
preventDefault - pra nao ir recarregando a todo momento

function handleSubmit(event) {
    event.preventDefault
} --- criada na mao.. nao precisa-- hook form tem a funcao

const {register, handleSubmit} = useForm

useForm tem a handleSubmit - nao precisa passar a funcao acima

function addUser(values){
    console.log(values)
}

<form onSubmit={handleSubmit(addUser)}>
funcao que recebe outra e injeta os valores

dentro do values - vai ter nome, uf e observacao

formState - do hook form 

const {register, formState} = 

<input {...register('nome'), {required: 'Nome é obrigatório'})}>
{formState.errors?.nome?.message}  

= {formState.errors && formState.errors.nome} -- poderia escrever assim tbm
tem erro? tem nome? mostra a mensagem

console.log(formState.errors)

async function addUser(values){
   try {
    console.log(values)

    const resposta = await fetch('http://localhost:3000/usuarios', {
        method: 'post',
        body: JSON.stringfy(values)
    })

    if(resposta.ok === false) {
        alert("houve um erro ao cadastrar o usuário")
    } else {
        alert ("pessoa cadastrada com sucesso")
    }   

    console.log(resposta)

   } catch (error) {
            alert("houve um erro ao cadastrar o usuário - no catch")
   }

}

fetch é nativo, axios precisa instalar - fazem a mesma coisa
vai na url, faz um post, com esse conteudo (no formato de string)
fazer uma requisao, vai retornar uma resposta, por isso coloca numa const
é assincrono, coloca await, pra segurar o retorno da requisao primeiro
aba network - traz o retorno 201, e codigos de retorno
ver no arquivo database.json == deve estar cadastrado la o usuario novo
inspecionar - ok:true - quando a requisao da certo, no objeto
fetch retorna 200 quando da erro, precisa olhar o ok, por isso o tto de erro deve ser inserido antes do catch
fetch - tem que prestar atencao nos codigos de erro, por isso o if e else


https://github.com/douglas-cavalcante/aula_react

post - popular
put - atualizar

ES7 React/Redux/React-Native/JS snippets => extensão do vscode que cria todo componente da função
basta digitar: rafce
React Arrow Function Component Export

react-router-dom
permite fragmentar em varias telas
npm install react-router-dom

pasta pages
Form.jsx


Route - define cada tela da aplicação
Routes - agrupa os route
BrowserRouter - url separado por /

pasta routes
index.jsx
ou na pasta geral
function RoutesApp(){
return ( 
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Form />}/>    ///importar esse arquivo jsx
)
}

app.jsx

import Routes from ... 
function App(){
    return(
        <RoutesApp />
    )
}

main chama app, arquivo app ve que tem componente de rotas
telas que criar, chama sempre no roteamento

pasta pages
List.jsx



function List () {

    const [lista, setLista] = useState([])   //nome da variavel e nome da funcao que vai alterar a variavel
    //nao tem nada na lista - array vazio  ==== aspas, para string vazio

    async function carregarDados(){
       const resposta = await fetch('http://localhost:3000/locais')
       
        setLista(await resposta.json()) 
    }

  
 o método é >> method: GET = mas nao precisa colocar- por ser fetch ja é automatico


    return (
        <>
            <div>
            <span>tela de listagem</span>

            map// percorre array e retorna linha a linha - retorna cada item da sua lista (variavel que foi salva) 
            // item é o proprio usuario

            {
                lista.map((item) => (
                    <p key={item.id}>
                        {item.nome} | {item.observacao}
                     </p>
                ))
            }

            <button onClick{carregarDados}>Carregar dados</button>
            
        </div>
    )
}

export default List 


armazenar info da api, precisa criar uma variavel de estado, useState vai armazenar o estado e trazer no return

consumir api que retorna array, usar array vazio no useState

nao mostra nada no inicio, array esta vazio, ao clicar no botao, array foi preenchido, tela é renderizada, e mostra os usuarios

loop ao retornar html -- key no <p> para renderizar melhor - da erro mas nao impede de funcionar a aplicacao



<div>
    <table border="1">
        <thead> // coluna
            <tr>
            <td>ID</td>
            <td>Nome</td>
            <td>uf</td>
            </tr>
        </thead>
        <tbody>        
            <tr>  /// table row
                <td>1</td>
                <td>douglas</td>
                <td>CE</td>
            </tr>
              <tr>  /// table row -- nova linha
                <td>1</td>
                <td>douglas</td>
                <td>CE</td>
            </tr>
        </tbody>
    </table>
</div>



<div>
    <table border="1">
        <thead> 
            <tr>
            <td>ID</td>
            <td>Nome</td>
            <td>uf</td>
            <td> ACOES <td>
            </tr>
        </thead>
        <tbody>        
            {
                lista.map((item) => (
                    <tr key={item.id2}>
                        <td> {item.nome} </td> |
                        <td> {item.observacao} </td>
                        <td>
                            <button> Editar </button>
                        </td>
                     </tr>
                ))
            }
        </tbody>
    </table>
</div>


paginação com react - api retorna dados picados - ao clicar em 2, retorna mais dados, exemplo, cada vez retorna 5 dados



lista na tela, sem precisar clicar no botao
useEffect - orientar a tela para disparar algo assim que a tela for renderizada
bloco que codigo que executa, assim que a tela é renderizada

useEffect(() => {
 carregarDados()
}, [])

[] array vazio, senao tela fica em looping infinito

plug in - para desenvolvedor
https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en&pli=1



import { Link } from 'react-router-dom'
<Link to="/"><button>Cadastrar</button></Link>



import { useNavigate } from react-router-dom
const navigate = useNavigate()
<button onClick={() => navigate('/')}>Cadastrar</button>



login - fazer um get - para ver se bate os dados


ROTAS PRIVADAS

login é publica

no Routes.app

function RotaPrivada(){
    //localStorage - pra saber se ta logado ou nao
    
    const estaAutenticado = localStorage.getItem("autenticado")

    return estaAutenticado === true ? (

    ) : Navigate (to='/')
}

<RotaPrivada>


const handleSubmit = () => {
    localStorage.setItem('autenticado', 'true')
}



bootstrap
reactstrap
react-bootrap