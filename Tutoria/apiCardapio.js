// Importa o módulo express
// express framework para Node.js que facilita a construção de aplicações web e APIs
// CORS é um mecanismo para conseguirmos acessar o endereço da API seguindo da página Index

const express = require('express');
const cors = require('cors');
const path = require('path');

// Cria uma instância do express (ou seja a estrutura para que o se consiga buscar os dados para serem consumidos)
const app = express();

// Aplica o middleware CORS (funciona como a ponte entre o código e as informações consumidas)
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Middleware para servir arquivos estáticos
// Diretório atual do script é o ponto de partida
app.use(express.static(path.join(__dirname, 'public')));

// Dados para serem consumidos
let produtos = [
    { id: 1, nome: 'Hambúrguer', preco: 7.99 },
    { id: 2, nome: 'Pizza', preco: 15.50 },
    { id: 3, nome: 'Refri', preco: 10.50 },
    { id: 4, nome: 'Pipoca', preco: 15.50 },
    { id: 5, nome: 'Queijo', preco: 15.50 }
];

// Endpoint para SOMENTE LISTAR TODOS OS produtos
//app.get('/produtos', (req, res) => {
    //res.json(produtos);
//});

// Endpoint para listar todos os produtos ou filtrar por nome
app.get('/produtos', (req, res) => {
    const { nome } = req.query; // Extrai o nome da query string (extrai o que digitamos como busca)
    if (nome) {
        // Filtra os produtos cujo nome contém o string fornecido (case insensitive)
        const resultados = produtos.filter(produto => produto.nome.toLowerCase().includes(nome.toLowerCase()));
        res.json(resultados);
    } else {
        res.json(produtos); // Se não houver parâmetro nome, retorna todos os produtos
    }
});

// Endpoint para adicionar um novo produto (parte do endereço onde são solicitados os dados)
app.post('/produtos', (req, res) => { //retorna o que foi solicitado
    const produto = req.body; // extrai o que se pediu
    produto.id = produtos.length + 1; // Ajuste para garantir que os IDs sejam únicos
    produtos.push(produto); // adiciona o produto na lsita para ser exibido
    res.status(201).json(produto); // retorna a resposta
});

// Configura o servidor para ouvir na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});


<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <title>Busca de Produtos</title>
    <link rel="stylesheet" href="styless.css">
</head>
<body>
    <div class="container">
        <!-- Divisão principal para agrupar elementos relacionados à busca de produtos -->
        <h1>Busca de Produtos</h1>
        <!-- Título visível na página indicando o propósito da interface -->
        <input type="text" id="produtoInput" placeholder="Nome do produto">
        <!-- Campo de entrada para digitar o nome do produto que o usuário deseja buscar -->
        <button onclick="buscarProdutos()">Buscar Produtos</button>
        <!-- Botão que dispara a função buscarProdutos() quando clicado -->
        <ul id="listaProdutos"></ul>
        <!-- Lista desordenada onde os produtos buscados serão exibidos -->
    </div>

    <script>
        function buscarProdutos() {
            // Captura o valor digitado pelo usuário no campo de entrada
            const nomeProduto = document.getElementById('produtoInput').value;
            // Prepara a URL para a requisição, incluindo o nome do produto como uma query string
            const url = http://localhost:3000/produtos?nome=${encodeURIComponent(nomeProduto)};

            // Faz uma requisição para o servidor e espera a resposta
            fetch(url)
                .then(response => {
                    // Verifica se a resposta da requisição é bem-sucedida
                    if (!response.ok) {
                        throw new Error('Falha na requisição: ' + response.statusText);
                    }
                    return response.json(); // Converte a resposta para JSON
                })
                .then(data => {
                    const lista = document.getElementById('listaProdutos');
                    lista.innerHTML = ''; // Limpa a lista para evitar duplicação de conteúdo
                    data.forEach(produto => {
                        const item = document.createElement('li'); // Cria um novo item de lista para cada produto
                        // Formata o preço do produto para a moeda brasileira (Real)
                        const precoFormatado = new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(produto.preco);
                        // Define o conteúdo do item de lista com o nome e preço formatado do produto
                        item.textContent = ${produto.nome} - ${precoFormatado};
                        lista.appendChild(item); // Adiciona o item formatado à lista de produtos
                    });
                })
                .catch(error => {
                    console.error('Erro ao buscar produtos:', error); // Loga(exibe) qualquer erro no console
                    alert('Erro ao buscar produtos: ' + error.message); // Mostra um alerta para o usuário em caso de erro
                });
        }
    </script>

</body>
</html>



body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 20px;
    display: flex;
    justify-content: center;
}

.container {
    width: 300px;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

input[type="text"], button {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

button {
    background-color: #5cb85c;
    color: white;
    cursor: pointer;
}

button:hover {
    background-color: #4cae4c;
}

ul {
    list-style: none;
    padding: 0;
    margin-top: 20px;
}

li {
    padding: 10px;
    border-bottom: 1px solid #ddd;
}
