//Usando .indexOf

let listaDeNomes = []

listaDeNomes.push('Péricles')
listaDeNomes.push('Joseph Peres')
listaDeNomes.push('Magali Peres')
listaDeNomes.push('Alef Peres')

let index = listaDeNomes.indexOf('Magali Peres')
delete listaDeNomes[index]
listaDeNomes[index] = listaDeNomes[index+1]
delete listaDeNomes[index+1]
listaDeNomes.pop()

console.log(`Index: ${index}`)
console.log(listaDeNomes)

/*
O método indexOf() é usado para descobrir a posição de um item específico em um array. Ele retorna o índice do primeiro item encontrado que atenda aos critérios de busca. Se o item não for encontrado, retorna -1. Aqui está um exemplo:

let frutas = ['maçã', 'banana', 'uva', 'laranja'];
let resultado = frutas.indexOf('banana');
console.log(resultado); // output: 1

No exemplo acima, o método indexOf foi usado para procurar o item "banana" no array "frutas". O resultado foi 1, o que significa que "banana" é o segundo item no array (lembrando que os índices em arrays começam em 0).
*/