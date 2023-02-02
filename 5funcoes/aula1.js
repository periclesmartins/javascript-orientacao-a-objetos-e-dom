//  FUNÇÕES/METODOS;

function soma(x,y) {
    return (x+y)
}
function subtracao(x,y) {
    return (x-y)
}
function multiplicacao(x,y) {
    return (x*y)
}
function divisao(x,y) {
    return (x/y)
}

let a = 10
let b = 5
let resultadoCompletoDasOperacoes = soma(a,b) + subtracao(a,b) + multiplicacao(a,b) + divisao(a,b)
console.log(resultadoCompletoDasOperacoes)