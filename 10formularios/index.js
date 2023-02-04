// Capturando o elemento botão da página html com Dom, através do querySelector, informando o ID
let btnSalvar = document.querySelector('#btn_salvar')

// Ativando o evento de click de mouse no botão Salvar.
btnSalvar.addEventListener('click', function(event) {
    event.preventDefault() //Evita que a página seja recarregada por padrão. Isso facilita a captura e validação dos dados.

    //Capturando o elemento formulario dentro do documento html, atraves do Dom com o querrySelector, informando o ID.
    let formularioDeCaptura = document.querySelector('#formulario_de_captura')

    //Capturando os dados das caixas de texto (inputs), informando o elemento formulário, e acessando os atributos name de caixa de texto.
    let primeiroNome = formularioDeCaptura.primeiro_nome.value
    let email = formularioDeCaptura.email.value
    let whatsapp = formularioDeCaptura.whatsapp.value

    //Apresentando os dados capturados do formulário, no console
    alert(`
    Primeiro nome: ${primeiroNome}
    E-mail: ${email}
    Whatsapp: ${whatsapp}
    `)    
})