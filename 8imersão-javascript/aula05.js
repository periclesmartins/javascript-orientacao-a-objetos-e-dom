//Funções
let login

function verificacao_login(nome_login) {
    if (nome_login === 'pericles') {
        console.log('Oi, Péricles!')
    } else if (nome_login === 'juvencio') {
        console.log('Oi, Juvencio!')
    } else {
        console.log('Erro! Usuário não encontrado!')
    }
}

login0 = 'pericles'
login1 = 'magali'
login2 = 'joseph'
login3 = 'alef'
verificacao_login(login0)
verificacao_login(login1)
verificacao_login(login2)
verificacao_login(login3)