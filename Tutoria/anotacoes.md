<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <title>Exemplo de Soma</title>
</head>
<body>
    <h1>Soma Simples em JavaScript</h1>
    <input type="number" id="num1" placeholder="Digite o primeiro número">
    <input type="number" id="num2" placeholder="Digite o segundo número">
    <button onclick="calcularSoma()">Calcular Soma</button>
    <p>Resultado: <span id="resultado"></span></p>

    <script> 
    //Função para calcular a soma de dois números
    function calcularSoma() {
    // Obtém o valor do primeiro número digitado pelo usuário e converte para inteiro
    var numero1 = parseInt(document.getElementById('num1').value);
    // Obtém o valor do segundo número digitado pelo usuário e converte para inteiro
    var numero2 = parseInt(document.getElementById('num2').value);
    // Calcula a soma dos dois números
    var soma = numero1 + numero2;
    // Exibe o resultado da soma no elemento <span> com id "resultado"
    document.getElementById('resultado').textContent = soma;
    }

    </script>
</body>
</html>


<!DOCTYPE html>
<!-- Define o tipo do documento como HTML5 -->
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <!-- Define o conjunto de caracteres como UTF-8 -->
    <title>Lista de Tarefas</title>
    <!-- Define o título da página que aparecerá na aba do navegador -->
    <link rel="stylesheet" href="styles.css">
    <!-- Link para o arquivo de estilos CSS externo que formata a página, cores etc -->
</head>
<body>
    <div class="container">
        <!-- Container principal para alinhar o conteúdo no centro, é um agrupamento de conteudo -->
        <h1>Minha Lista de Tarefas</h1>
        <!-- Título da página com tamanho h1 -->
        <input type="text" id="tarefaInput" placeholder="Adicione uma nova tarefa">
        <!-- Campo de entrada para digitar novas tarefas com um placeholder(campo que você digita o nome da tarefa) -->
        <button id="adicionarTarefa">Adicionar Tarefa</button>
        <!-- Botão para adicionar a tarefa escrita no campo de entrada -->
        <ul id="listaDeTarefas"></ul>
        <!-- Lista não ordenada onde as tarefas adicionadas serão exibidas -->
        <!-- <ol id="listaDeTarefas"></ol> Para Lista ordenada por tópicos numericos--> 
    </div>
    <script>
        // Início do script JavaScript que gerencia a lista de tarefas
        document.getElementById('adicionarTarefa').addEventListener('click', function() {
            // Adiciona um ouvinte de evento de clique ao botão para executar a função quando clicado
            // document = toda a página, getelementByid = Especifica o elemento, que é ('adicionar tarefa')
            var input = document.getElementById('tarefaInput');
            // Obtém o elemento de entrada de texto
            var novaTarefa = input.value.trim();
            // Extrai e limpa espaços em branco do texto inserido no campo de entrada
            if (novaTarefa) {
                // Verifica se a nova tarefa não está vazia
                var lista = document.getElementById('listaDeTarefas');
                // Obtém a lista não ordenada
                var item = document.createElement('li');
                // Cria um novo elemento de lista (li)
                item.textContent = novaTarefa;
                // Define o texto do item de lista para o valor inserido, ous seja coloca esse novo item na lista
                item.addEventListener('click', function() {
                    // Adiciona um ouvinte de evento de clique ao item da lista
                    item.classList.toggle('done');
                    // Alterna a classe 'done' para marcar ou desmarcar a tarefa como concluída, busca no css o visual de tarefa riscada
                });
                lista.appendChild(item);
                // Adiciona o novo item ao final da lista não ordenada
                input.value = ''; // Limpa o campo de entrada
            } else {
                alert('Por favor, digite uma tarefa!');
                // Exibe um alerta se o campo de entrada estiver vazio ao tentar adicionar
            }
        });

        // Adiciona funcionalidade para permitir adicionar tarefa com a tecla Enter
        document.getElementById('tarefaInput').addEventListener('keypress', function(e) {
            // Adiciona um ouvinte de evento de pressionamento de tecla ao campo de entrada
            if (e.key === 'Enter') {
                // Verifica se a tecla pressionada é 'Enter'
                document.getElementById('adicionarTarefa').click();
                // Programaticamente aciona o evento de clique do botão de adicionar tarefa
            }
        });
    </script>
</body>
</html>


body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4; /* Mantém a cor de fundo cinza claro /
    margin: 0;
    padding: 20px;
    display: flex;
    justify-content: center;
}

.container {
    width: 300px;
}

h1 {
    color: #333; / Se a cor precisa ser ajustada, favor especificar a cor do título do logotipo /
}

input, button {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #ddd; / Mantém a borda cinza claro para contrastar /
}

button {
    background-color: #FF6AB3; / Alterado para a cor rosa do logotipo /
    color: white;
    cursor: pointer;
}

button:hover {
    background-color: #FF85C0; / Uma variação mais clara do rosa para efeito hover */
}

ul {
    list-style: none;
    padding: 0;
}

li {
    background-color: #fff;
    margin-top: 5px;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
}

li.done {
    text-decoration: line-through;
    color: #ccc;
}
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4; /* Mantém a cor de fundo cinza claro /
    margin: 0;
    padding: 20px;
    display: flex;
    justify-content: center;
}

.container {
    width: 300px;
}

h1 {
    color: #333; / Se a cor precisa ser ajustada, favor especificar a cor do título do logotipo /
}

input, button {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #ddd; / Mantém a borda cinza claro para contrastar /
}

button {
    background-color: #FF6AB3; / Alterado para a cor rosa do logotipo /
    color: white;
    cursor: pointer;
}

button:hover {
    background-color: #FF85C0; / Uma variação mais clara do rosa para efeito hover */
}

ul {
    list-style: none;
    padding: 0;
}

li {
    background-color: #fff;
    margin-top: 5px;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
}

li.done {
    text-decoration: line-through;
    color: #ccc;
}

// Importa o módulo express
const express = require('express');
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Dados em memória
let produtos = [
    { id: 1, nome: 'Hambúrguer', preco: 7.99 },
    { id: 2, nome: 'Pizza', preco: 15.50 }
];

// Endpoint para listar todos os produtos
app.get('/produtos', (req, res) => {
    res.json(produtos);
});

// Endpoint para adicionar um novo produto
app.post('/produtos', (req, res) => {
    const produto = req.body;
    produto.id = produtos.length + 1;
    produtos.push(produto);
    res.status(201).json(produto);
});

// Configura o servidor para ouvir na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
[20:21]
GET http://localhost:3000/produtos

POST http://localhost:3000/produtos
Content-Type: application/json

{
    "nome": "Sanduíche Natural",
    "preco": 4.99
}

<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <title>Mini Quiz</title>
</head>
<body>
    <h1>Mini Quiz em JavaScript</h1>
    <button onclick="iniciarQuiz()">Iniciar Quiz</button>
    <p id="quiz"></p>

    <script>
        // Função para iniciar o quiz
function iniciarQuiz() {
    // Uma array de perguntas e respostas
    var perguntas = [
        { pergunta: "Capital da França", resposta: "Paris" },
        { pergunta: "Capital da Espanha", resposta: "Madri" },
        { pergunta: "Capital do Brasil", resposta: "Brasília" }
    ];
    // Inicia um contador de respostas corretas
    var acertos = 0;

    // Itera sobre cada pergunta
    perguntas.forEach(function (item) {
        // Pede ao usuário para responder a pergunta
        var respostaUsuario = prompt(item.pergunta);
        // Verifica se a resposta está correta
        if (respostaUsuario.toLowerCase() === item.resposta.toLowerCase()) {
            acertos++; // Incrementa o contador de acertos
        }
    });

    // Mostra o número de acertos após o usuário responder todas as perguntas
    document.getElementById('quiz').textContent = "Você acertou " + acertos + " de " + perguntas.length + ".";
}

    </script>
</body>
</html>

<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <title>Lista de Tarefas</title>
</head>
<body>
    <h1>Adicionar Tarefa</h1>
    <input type="text" id="novaTarefa" placeholder="Digite uma nova tarefa">
    <button onclick="adicionarTarefa()">Adicionar</button>
    <ul id="listaTarefas"></ul>

    <script>
        // Função para adicionar uma nova tarefa à lista
    function adicionarTarefa() {
    // Captura o valor digitado pelo usuário
    var tarefa = document.getElementById('novaTarefa').value;
    // Cria um novo elemento de lista <li>
    var item = document.createElement('li');
    // Define o conteúdo do item com o texto digitado
    item.textContent = tarefa;
    // Adiciona o item criado à lista de tarefas
    document.getElementById('listaTarefas').appendChild(item);
    // Limpa o campo de entrada após adicionar a tarefa
    document.getElementById('novaTarefa').value = '';
}

    </script>
</body>
</html>

API REST

INSTALAR

node - executa o javascript no servidor
express - framework para node.js , que facilita a construção de aplicações ewbs e apis
cors - é um mecanismo para conseguirmos acessar o endereço da api seguindo da pagina index

npm init -y
npm install express
npm install cors