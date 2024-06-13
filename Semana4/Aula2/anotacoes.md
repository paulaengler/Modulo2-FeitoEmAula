. representa classe
# representa id

https://www.youtube.com/watch?v=4sjuOXzAOIg

https://medium.com/@lucas-rocha/especificidade-e-o-porqu%C3%AA-de-algumas-regras-n%C3%A3o-se-aplicarem-no-css-620e41cd389c

https://miro.medium.com/v2/resize:fit:808/1*G73Yp-82tYG2X95qEKClyQ.png

EVENTOS - são uma forma de interação entre o usuário e página web
clicar em um botão, mover o mouse, pressionar uma tecla, enviar um formulário

Eventos de mouse
click
dbclick
mouseover
mousedown

no html = usa onclick
np javascript = adiciona apenas click

Eventos de teclado
keydown
keyup
keypress

key code table

no inspecionar - aparece as teclas que foram clicadas
permitir que aperte o enter, no input de busca, e é redirecionado
ex: site de busca do google

Eventos de janela
load
resize
scroll

Eventos de formulário

tag form onsubmit

submit
focus
blur
change

//onsubmit="submitForm($event)"
<form id="myForm">
    <input type="text" name="username" placeholder="Username">
    <button type="submit"> Enviar </button>
</form>

<script>
    const myForm = document.getElementById('myForm')

    myForm = addEventListener('submit', (event) => {
        event.preventDefault() //previne o envio padrão do form
        console.log('Submit do Form')
        console.log(event)
    })

    preventDefault- evita a atualização da pagina e perde os dados
    os dados vão pra url da pagina

    