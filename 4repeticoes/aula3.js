let listaNomes = []
listaNomes.push('Dreyke')
listaNomes.push('Raquel')
listaNomes.push('Vinicius')
listaNomes.push('Lyana')
listaNomes.push('Antonio')
listaNomes.push('Kely')

console.log(`${listaNomes}: ${listaNomes.length}`)
let AntonioEstaCadastrado = false

for (let index = 0; index < listaNomes.length; index++) {
    if (listaNomes[index] === "Antonio") {
        console.log('Antonio está cadastrado no sistema!')
        AntonioEstaCadastrado = true
    }   
}

if (AntonioEstaCadastrado === true) {
    console.log('Não precisa cadastrar o Antonio.')
} else {
    console.log('Cadastre o Antonio.')
}