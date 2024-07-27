https://github.com/FuturoDEV-Trip/M2S09-TEMPLATE-AULA2

https://docs.google.com/presentation/d/1-hCkULzemSPX6EoWwOfNMH9MTkkUuPFEJh3VHk-17Ug/edit#slide=id.g2eec3c3d0bd_0_85

https://nicholasmacedoo.notion.site/Complementar-65fca90e02744cf59127ee4c06537ddb

https://www.youtube.com/playlist?list=PLcaSifqVh0MoO55MfQ1voYISWWp0xSEh4

https://nicholasmacedoo.notion.site/Git-Sincronizar-uma-bifurca-o-95b87f351ab444c784650a0de91bf4a2

# Git - Sincronizar uma bifurcação

*Aqui é um exemplo como você pode utilizar ‘templates’ de terceiros e atualizar alguma parte especifica do seu código caso o ‘template’ sofrer atualizações.* 

### 1. **Atualizações Manuais:**

- **Passo 1:** Buscar as últimas mudanças do repositório template.
- **Passo 2:** Mesclar ou aplicar manualmente essas mudanças no seu repositório.

### 2. **Usando `git pull upstream master`:**

- **Passo 1:** Adicionar o repositório template como um remoto:
    
    ```bash
    git remote add upstream <URL-do-repositorio-template>
    ```
    
- **Passo 2:** Buscar as mudanças do repositório template:
    - isso irá listar branchs que foram atualizadas.
    
    ```bash
    git fetch upstream
    ```
    
- **Passo 3:** Mesclar as mudanças no seu branch local:
    - Crie uma `branch` para criar esse merge, dessa forma isola os riscos com a sua `branch` principal ou develop.
    
    ```bash
    
    git merge upstream/master --allow-unrelated-histories
    ```
    
    `--allow-unrelated-histories` : Se não mencionado irá apresentar um erro pois os repositórios não compartilham os históricos e ao incluir esse flag irá permitir a mesclagem mesmo não tendo relações de históricos. 
    
    Após isso, modifique conforme necessário e, se ocorrerem conflitos, será preciso resolvê-los.

na pasta do template
git remote add upstream LINK (do template)
git fetch upstream



.eslintrc.cj
'react/prop-types': 0



privateroute.jsx
se existir usuario (?), retorna o template, senao (:), vai pra pagina de login 



index.jsx
handleSubmit - funcao que gerencia o formulario
required - campo obrigatorio




/(\d{4})[-.\/](\d{2})[-.\/](\d{2})
ReGex pra validar data



npm i lucide-react
biblioteca de icones
ver no site o nome do icone que deseja
sair - logout
import { LogOut} from 'lucide-react'
<button className='btn btn-dark' onClick={signout}> 
    <LogOut size={16}/>
</button>

<span><User size={24}></span>

***
26/07 - 21 hrs
deploy

https://www.netlify.com/
https://develop-m2s09.netlify.app/

**** 