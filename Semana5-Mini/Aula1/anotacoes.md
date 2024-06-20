**módulos javascript

exportações nomeadas

linha individual ou todos de uma vez na parte inferior

export const name = "Paula"
ou
export {name}

exportação padrão 

function message(){}
export default message; 

importação de exportaçoes nomeadas
import {name} from "./person.js"

import mensagem from "./person.js"

<script src="" type="module"></script>

** programação síncrona

o código síncrono é lido e executado da primeira até a ultima linha, em ordem
uma tarefa deve ser concluída antes que a proxima possa começar 

** programação assincrona
as funções nao sao executadas em ordem
podemos interromper o código
setTimeout() - executa como segundo plano - executa a funcao qd o temporizador expirar

function executarFuncao(message) {
    console.log(message);
    console.timeEnd("ultimo"); // Finaliza a medição de tempo
  }
  
  console.log("Primeiro");
  
  // Define um timeout para chamar 'executarFuncao' após 2000 milissegundos (2 segundos)
  setTimeout(executarFuncao, 2000, "Bem vindo!");
  
  console.time("ultimo"); // Inicia a medição de tempo

  setInterval


**Promisses

