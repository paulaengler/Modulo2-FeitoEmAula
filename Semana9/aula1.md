https://rockcontent.com/br/blog/cms/

bibliotecas

Lucide
Hero icon

npm i react-router-dom

pasta src
criar pasta routes
index.jsx

pasta pages


npm install @mui/material @emotion/react @emotion/styled

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"/>


***
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'

function App() {
  return <RouterProvider router={routes} />
}

export default App
import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from '../pages/home'
import { ContatoPage } from '../pages/contato'


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/contato',
        element: <ContatoPage />
    }
])

****

consumer
provider

***
https://reactrouter.com/en/main/components/outlet

https://nicholasmacedoo.notion.site/Complementar-65fca90e02744cf59127ee4c06537ddb?pvs=4





*** youtube
ReactContext -- consumer e provider

