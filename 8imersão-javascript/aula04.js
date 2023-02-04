//Funções;
let idade
function autosoma(idade) {
    idade++
    return idade
}
idade = autosoma(1) //adiciona mais um número a soma.

idade = autosoma(idade)
idade = autosoma(idade)
idade = autosoma(idade)
idade = autosoma(idade)
idade = autosoma(idade)
idade = autosoma(idade)
idade = autosoma(idade)

console.log(autosoma(idade))