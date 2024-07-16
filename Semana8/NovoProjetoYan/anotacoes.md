Conectar com API 

Abre pasta do projeto e digita esse comando no terminal, para instalar globalmente o pacote json-server 
npm install -g json-server

esse pacote serve para construir uma api fake 

cria arquivo db.json e copia texto pronto do professor

abre a pasta do projeto no git bash
D:\Paula\FuturoDEV-Modulo2\FeitoEmAula\Semana8\NovoProjetoYan\Semana8>

rodar esse comando no gitbash
json-server --watch db.json

o correto seria rodar o comando no terminal do vsc, mas o meu esta dando erro no script
Erro:
json-server : O arquivo C:\Users\Paula\AppData\Roaming\npm\json-server.ps1 não pode ser carregado porque a 
execução de scripts foi desabilitada neste sistema. Para obter mais informações, consulte
about_Execution_Policies em https://go.microsoft.com/fwlink/?LinkID=135170.
No linha:1 caractere:1
+ json-server --watch db.json
+ ~~~~~~~~~~~
    + CategoryInfo          : ErrodeSegurança: (:) [], PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess


para saber se funcionou, no endpoints, deve ter localhost:???/users 
?? numeros

copiar o endereço do endpoint e jogar no navegador
http://localhost:3000/users

sempre rodar o projeto react: npm run dev e rodar json-server --watch db.json
vai usar o pacote json-server e vai ler o tempo todo o arquivo db.json, gerando uma api fake



