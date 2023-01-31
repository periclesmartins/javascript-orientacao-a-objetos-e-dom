// Estrutura condicional

let login = 'josephperes'
let senha = '123'

if (login === 'periclesperes' && senha == 123) {
    console.log('Tudo ok, seja bem-vindo, Péricles!')
} else if (login === 'magaliperes' && senha == 123) {
    console.log('Tudo ok, seja bem-vinda, Magali!')
} else if (login === 'josephperes' && senha == 123) {
    console.log('Tudo ok, seja bem-vindo, Joseph!')
} else if (login === 'alefperes' && senha == 123) {
    console.log('Tudo ok, seja bem-vindo, Alef!')
} else if (login === 'erlandiamaciel' && senha == 123) {
    console.log('Tudo ok, seja bem-vinda, Erlandia!')
} else {
    console.log('Login ou senha contem erros, tente novamente.')
}

/*

O if é uma estrutura de controle de fluxo que permite a execução de um bloco de código somente se a condição for verdadeira. Se a condição for falsa, o código não será executado. A sintaxe é a seguinte:


if (condição) {
    // código a ser executado se a condição for verdadeira
}
O else if é uma extensão do if, que permite especificar uma outra condição para ser testada, caso a condição do if seja falsa. A sintaxe é a seguinte:


if (condição1) {
    // código a ser executado se a condição1 for verdadeira
} else if (condição2) {
    // código a ser executado se a condição1 for falsa e a condição2 for verdadeira
}
O else é usado como um "catch-all", ou seja, ele é executado se todas as outras condições anteriores forem falsas. A sintaxe é a seguinte:


if (condição1) {
    // código a ser executado se a condição1 for verdadeira
} else if (condição2) {
    // código a ser executado se a condição1 for falsa e a condição2 for verdadeira
} else {
    // código a ser executado se as condições anteriores forem falsas
}

*/