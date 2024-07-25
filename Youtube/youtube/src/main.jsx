import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//foi incluido 
import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom'
import Home from './routes/Home.jsx'
import Contact from './routes/Contact.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import ContactDetails from './routes/ContactDetails.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      { path: "/", element: <Home/>},
      { path: "/contact", element: <Contact/>},
      // rotas aninhadas - rotas dinamicas - id é dinamico - identificador unico
      { path: "/contact/:id", element: <ContactDetails/>},
      //navigate para paginas nao existentes, importa o Navigate
      { path: "oldcontact", element: <Navigate to="/contact"/>}
    ],
  },
]);


import { ThemeProvider } from './context/ThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
        <RouterProvider router={router}/>
    </ThemeProvider>    
  </React.StrictMode>,
)



  //navigate para paginas nao existentes, importa o Navigate
  // { path: "oldcontact", element: <Navigate to="/contact"/>}
  // usuario cai nesse link, mas ele nao existe, entao manda pra outro path