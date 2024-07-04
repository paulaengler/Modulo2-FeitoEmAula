REACT

reaproveitamento da parte do html - reutilização do código

performance

fazer segmentações

componentização

Instalação e configuração
NodeJs
Vite

abrir cmd na pasta - react 
npm create vite@latest
vai aparecer: Project name: › vite-project
digitar o nome do projeto
selecionar o react, setinha, enter
selecionar a variant - javascript
abre no vsc a pasta do projeto - o vite ja vai ter gerado alguns arquivos
run now - vai passar os comandos que precisa dar
cd react-nature .. entra nessa pasta
npm install
npm run dev
vai trazer um endereço local host
abrir em um navegador 

https://vitejs.dev/guide/

documentação:
react.dev



**
criar um arquivo react com vite 
npm create vite@latest
y
nome projeto
framework
linguagem
cd react-nature
npm install
npm run dev
**

package.json
dev-dependences - ajuda na hora do desenvolvimento
dependencies - importante 
npm run dev (dev vem do script)

nao mexer no arquivo index.html
principalmente linhas 10 e 11 - div root , pode ser que nao carregue o projeto

na pasta src, será trabalhado
arquivo css
arquivo jsx - pagina html - ex: pagina de contato - contato.jsx

main.jsx
primeiro arquivo react que vai ser carregado
vai renderizar um determinado codigo, na div root
evitar mexer no arquivo

app.jsx
para modificar
arquivo para exportar uma função
export no final do arquivo
funcao para retornar um html
o return é basicamento um html
para definir classe na tag, className
id é igual
`${}` interpolação - para ser dinamico , nao usar mais assim nesse arquivo, apenas {}


main.jsx
comentou parte do app
criou o contato, inseriu a linha <contato /> 
e importou ./contato.jsx


https://www.origamid.com/projetos/bikcraft/contato.html

dentro do src
criar nova pasta - components
arquivo Header.jsx

https://www.origamid.com/projetos/bikcraft/img/bikcraft.svg
https://www.origamid.com/projetos/bikcraft/contato.html

arquitetura basica,de um componente html
function Header(){
    return (
        <>
        </>
    )

}
export default Header


nomear os elementos com classe, para conseguir ver no inspecionar 


https://github.com/yanestevesufjf/react_inicial
npm install
npm run dev
