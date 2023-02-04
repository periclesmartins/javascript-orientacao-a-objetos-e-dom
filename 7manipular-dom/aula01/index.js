//DOM
//captura de elementos html;
let botao_compra = document.querySelector("#botao_compra")
let adicionar_google = document.querySelector("#adicionarGoogle")
let google = document.querySelector("#google")
let body = document.body

//função para detectar o click no botao_compra e removê-lo.
botao_compra.addEventListener('click', () => {
    google.parentElement.removeChild(google) //remover filho
})
//preparando o novo elemento (botao) a ser adicionado
let botao_google_novo = document.createElement("a")
let texto_botao = document.createTextNode('Novo Botão do Google')
botao_google_novo.appendChild(texto_botao) //adicionar filho
botao_google_novo.href = 'https://www.google.com/'
//função que adiciona o novo botão atraves de um evento click
adicionar_google.addEventListener('click', () => {  
    body.appendChild(botao_google_novo)   
})
