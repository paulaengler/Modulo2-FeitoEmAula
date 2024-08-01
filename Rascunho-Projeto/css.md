/* Form Log In */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 24px;
gap: 24px;

position: absolute;
width: 368px;
min-width: 320px;
height: 351px;
left: 52px;
top: 165px;

background: #FFFFFF;
border: 1px solid #D9D9D9;
border-radius: 8px;


https://cdn.pixabay.com/photo/2022/08/22/10/01/tree-7403295_960_720.jpg

https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_1280.jpg

https://cdn.pixabay.com/photo/2022/09/28/10/26/japanese-snowball-7484699_640.jpg

https://cdn.icon-icons.com/icons2/4231/PNG/96/building_home_house_icon_263742.png







import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function Login() {
    const { signIn } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    async function handleSubmit(e){
        e.preventDefault();
        setError(null);

        try {
            await signIn({ username, password });
            console.log('login', 'nome:',username, 'senha:',password)
        }catch(error) {
            console.log('falha no login');
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" 
                value={username}
                id='username' 
                onChange={(e) => setUsername(e.target.value)}
                />
            
                <label htmlFor="password">Password</label>
                <input type="text" 
                value={password}
                id='password' 
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            {error && <p style={{color:'red'}}>{error}</p>}

            <button type='submit'>Login</button>
        </form>

    )

}

// import { Link } from "react-router-dom"
import Sidebar from "../components/Sidebar/Sidebar"
import './login.css'
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

function Login(){

    const { signIn } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    async function handleSubmit(e){
        e.preventDefault();
        setError(null);

        try {
            await signIn({ username, password });
            console.log('login', 'nome:',username, 'senha:',password)
        }catch(error) {
            console.log('falha no login');
        }
    }

    return (
        <>
        <Sidebar>

        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Email</label>
                <input type="email" 
                value={username}
                id='username' 
                onChange={(e) => setUsername(e.target.value)}
                />
            
                <label htmlFor="password">Senha</label>
                <input type="text" 
                value={password}
                id='password' 
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            {error && <p style={{color:'red'}}>{error}</p>}

            <button type='submit'>Login</button>
        </form>

        </Sidebar>
        </>
    )
}

export default Login


import { createContext, useContext, useEffect, useState } from "react";


//contexto
const AuthContext = createContext(null)

//provider
export function AuthProvider({ children }){
    const [auth, setAuth] = useState(null);

    //localStorage
    useEffect(() => {
        const storageAuth = localStorage.getItem('auth')
        if (storageAuth){
            setAuth(JSON.parse(storageAuth));
        }

    }, []);

    //método signin
    const signIn = async ({ username, password}) => {
        try {
            const response = await fetch('https://dummyjson.com/auth/login', { 
                method: 'POST',
                headers: {
                    'Content-type': "application/json"
                },
                body: JSON.stringify({ username, password })
            });

            if(!response.ok){
                throw new Error('Erro na autenticação')
            }

            const data = await response.json();

            localStorage.setItem('auth', JSON.stringify(data));
            setAuth(data);
            return data;
        }catch (error) {
            console.error('Erro na autenticação', error)
            throw error
        }
    };

    //método signOut
    const signOut = () => {
        localStorage.removeItem('auth');
        setAuth(null);
    };

    return(
        <AuthContext.Provider value={{ auth, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );    
}

//custom hook
export const useAuth = () => useContext(AuthContext);




O aviso que você está recebendo está relacionado ao uso do Fast Refresh do React, que é uma ferramenta para atualizar o seu código de forma eficiente durante o desenvolvimento. O Fast Refresh funciona melhor quando cada arquivo exporta apenas componentes React. Quando você exporta outros tipos de entidades, como funções ou constantes, isso pode interferir no comportamento do Fast Refresh.

Para resolver o aviso, você deve mover a exportação de funções e constantes para arquivos separados. Vou mostrar como você pode fazer isso com base no seu exemplo export const useAuth = () => useContext(AuthContext);.

Passo 1: Crie um arquivo para suas funções
Crie um novo arquivo chamado authHooks.js (ou qualquer nome que você preferir) na mesma pasta onde está o seu arquivo atual.

authHooks.js

javascript
Copiar código
import { useContext } from 'react';
import { AuthContext } from './AuthContext'; // Ajuste o caminho conforme necessário

export const useAuth = () => useContext(AuthContext);
Passo 2: Atualize o arquivo original
No seu arquivo original, remova a exportação da função useAuth e faça a importação a partir do novo arquivo authHooks.js.

AuthContext.js (ou o nome do seu arquivo original)

javascript
Copiar código
// Mantenha aqui apenas o componente relacionado ao contexto
import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(null);

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};
Passo 3: Use o hook em seus componentes
Agora, você pode importar o useAuth no arquivo dos seus componentes quando precisar usá-lo.

SomeComponent.js

javascript
Copiar código
import React from 'react';
import { useAuth } from './authHooks'; // Ajuste o caminho conforme necessário

const SomeComponent = () => {
  const { authState, setAuthState } = useAuth();

  // Seu código aqui

  return <div>...</div>;
};

export default SomeComponent;
Resumo
Ao seguir esses passos, você estará separando as funções e constantes dos componentes React, o que deve resolver o aviso do Fast Refresh e manter seu código mais organizado e modular.