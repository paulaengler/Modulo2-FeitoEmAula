https://docs.google.com/document/d/15wCzQ97xWeckSn7kDzcpYFkzyqOGTXruG8ZEUf-MZOg/edit?usp=sharing

https://www.figma.com/design/QVcbYrMEXZDWbSgLG2HsOG/ativa365?node-id=1-5&t=4ygo2EinklVmPraU-0

https://www.notion.so/nicholasmacedoo/Complementar-65fca90e02744cf59127ee4c06537ddb

https://www.youtube.com/playlist?list=PLcaSifqVh0MoO55MfQ1voYISWWp0xSEh4

https://nicholasmacedoo.notion.site/Leaflet-e-React-Leaflet-d4fc019d0a16495f9386a93fcdd76d18

#
para não precisar usar api do modulo 1, criar arquivo server.json

instalar
npm i json-server

rodar
npx json-server server.json

gerar os usuarios no 4DEV


{
    "users" : [
        {
          "nome": "Ana Silva",
          "sexo": "Feminino",
          "cpf": "123.456.789-10",
          "data_nascimento": "1990-03-15",
          "email": "ana.silva@example.com",
          "senha": "senha123",
          "endereco": {
            "cep": "01001-000",
            "logradouro": "Praça da Sé",
            "complemento": "",
            "bairro": "Sé",
            "localidade": "São Paulo",
            "uf": "SP",
            "ibge": "3550308",
            "gia": "1004",
            "ddd": "11",
            "siafi": "7107"
          }
        },
        {
          "nome": "Carlos Pereira",
          "sexo": "Masculino",
          "cpf": "234.567.890-11",
          "data_nascimento": "1985-06-20",
          "email": "carlos.pereira@example.com",
          "senha": "12345carlos",
          "endereco": {
            "cep": "20010-000",
            "logradouro": "Avenida Presidente Vargas",
            "complemento": "Bloco B",
            "bairro": "Centro",
            "localidade": "Rio de Janeiro",
            "uf": "RJ",
            "ibge": "3304557",
            "gia": "",
            "ddd": "21",
            "siafi": "6001"
          }
        },
        {
          "nome": "Maria Oliveira",
          "sexo": "Feminino",
          "cpf": "345.678.901-12",
          "data_nascimento": "1995-09-10",
          "email": "maria.oliveira@example.com",
          "senha": "maria456",
          "endereco": {
            "cep": "30110-000",
            "logradouro": "Rua da Bahia",
            "complemento": "Apt 23",
            "bairro": "Centro",
            "localidade": "Belo Horizonte",
            "uf": "MG",
            "ibge": "3106200",
            "gia": "",
            "ddd": "31",
            "siafi": "4031"
          }
        },
        {
          "nome": "João Souza",
          "sexo": "Masculino",
          "cpf": "456.789.012-13",
          "data_nascimento": "1970-12-30",
          "email": "joao.souza@example.com",
          "senha": "joao789",
          "endereco": {
            "cep": "40010-000",
            "logradouro": "Avenida Sete de Setembro",
            "complemento": "",
            "bairro": "Centro",
            "localidade": "Salvador",
            "uf": "BA",
            "ibge": "2927408",
            "gia": "",
            "ddd": "71",
            "siafi": "3849"
          }
        },
        {
          "nome": "Fernanda Costa",
          "sexo": "Feminino",
          "cpf": "567.890.123-14",
          "data_nascimento": "2000-01-01",
          "email": "fernanda.costa@example.com",
          "senha": "costa123",
          "endereco": {
            "cep": "80010-000",
            "logradouro": "Rua XV de Novembro",
            "complemento": "",
            "bairro": "Centro",
            "localidade": "Curitiba",
            "uf": "PR",
            "ibge": "4106902",
            "gia": "",
            "ddd": "41",
            "siafi": "7535"
          }
        }
    ],
}

https://dontpad.com/usuarios-fake

pasta context
auth.jsx

dashboard 20:04 
const [locais, setLocais]

async function buscarLocais () {
    const response = await api('/Locais')   -- ver arquivo api
}

useEffect (() => {
    buscarLocais()
}), []) 

tabela com local e usuario

locais.map

#
React-Leaflet
