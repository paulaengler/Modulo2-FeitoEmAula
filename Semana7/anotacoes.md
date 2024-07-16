Aula1

atualiza apenas o componente que foi alterado, utilizando uma DOM virtual

PropTypes:

// vai somar --- <Soma numero1={10} numero2={30}/>  
// vai concatenar --- <Soma numero1="10" numero2="30"/>
//para ter um controle disso, instala a biblioteca prop-types
npm i prop-types



ao adicionar o prop-types, aviso (não é erro):
App.jsx:32 Warning: Failed prop type: Invalid prop `numero1` of type `string` supplied to `Soma`, expected `number`.
    at Soma (http://localhost:5173/src/components/Soma.jsx?t=1720545530610:18:24)
    at App
esta enviando uma string - <Soma numero1="10" numero2="30"/>  mas ele espera um numerico
a forma de enviar seria, <Soma numero1={10} numero2={30}/>  

Soma.propTypes = {
    numero1: PropTypes.number,
    numero2: PropTypes.number.isRequired,  //necessário enviar um valor, se não enviar, da erro
}

Imutabilidade
useState - criando uma nova copia do estado com as alterações necessarias em vez de modificar
o estado existente diretamente.


Hooks
funções que permitem ligar-se aos recursos de state e ciclo de vida do reack a partir de
componentes funcionais.
Permite que use react sem classes

exemplos de hooks:
useState
useReducer
useContext
useRef
useEffect
useLayoutEffect
useInsertionEffect
useMemo
useCallback


sintaxe do useState

export function MyComponent(){
    const [state, setState] = useState(null);
    return <div>{state}</div>
}
state - valor do estado -- produto
setState - função para atualizar o estado -- setProduto
null - valor inicial - pode passar uma função, deve ser sincrona, deve retornar

react vai atualizar apenas qd for necessário, qd tiver uma atualização do valor, ele renderiza (apresenta em tela qd for atualizado) novamente. não fica atualizando constantemente. 


heroicons.com
icones para copiar - jsx ou svg(arquivo figura)

lucide - react - biblioteca com icones

// para puxar o que foi digitado, conforme vai escrevendo no box, vai aparecendo ao lado de nome é:
const [nome, setNome] = useState('')
<h1>Nome é: {nome}</h1>
<input type="text" placeholder="Informe o seu nome" onChange={event => setNome(event.target.value)}/>


//botao
  function onSubmit(){
    const data = {
      nome,
      email
    }
    console.log(data)
  }
    <button onClick={onSubmit}>Enviar dados</button>



*Efeitos Colaterais*
useEffect - hook que serve para lidar com os efeitos

useEffect(() => {/*Realiza algo */}, [condição para execução])

main.jsx
<StrictMode> quando em desenvolvimento
no console, aparece 2x renderizou, apesar de só ter rodado 1x
se comentar no main, aparece só uma vez

****AULA2***

https://github.com/FuturoDEV-Trip/MS2S07

useRef - seu retorno é um objeto com uma propriedade .current

componentes controlados

comentário whats-useState renderiza a toda mudança...  e isso é positivo e negativo dependendo de pra quer for usar...
captar a informação com referências não atualiza a cada mudança...  pega a informação apenas ao final... exatamente comoo faziamos antes com o document.querySelector


Aula3-

https://getbootstrap.com/
npm install bootstrap@5.3.3
import 'bootstrap/dist/css/bootstrap.min.css'
importação no arquivo main.jsx


