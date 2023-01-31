// Adicionando e Removendo Elementos da Lista:
let listaDeNomes = []

listaDeNomes.push('Péricles')
listaDeNomes.push('Joseph Peres')
listaDeNomes.push('Magali Peres')
listaDeNomes.push('Alef Peres')
console.log(listaDeNomes)

listaDeNomes[3] = 'Miguel' //- subestitui um dado dentro da variável por um novo.
console.log(listaDeNomes)

listaDeNomes.pop() //- apaga o último dado da variável.
console.log(listaDeNomes)

listaDeNomes.shift() //- apaga o primeiro dado da variável.
console.log(listaDeNomes)

delete listaDeNomes[0]
listaDeNomes[0] = 'Jesus'
console.log(listaDeNomes)

/*
O comando delete em JavaScript é usado para remover uma propriedade de um objeto. Ao usar o comando delete em uma propriedade de objeto, essa propriedade é excluída do objeto, tornando-a indefinida. Aqui está um exemplo de como usar o comando delete:

let obj = { name: 'John', age: 30 };

delete obj.age;

console.log(obj); // Output: { name: 'John' }

Note que o comando delete não pode ser usado para remover variáveis ou elementos de um array. Além disso, também não é possível usar o comando delete para remover propriedades protegidas ou não configuráveis, como as propriedades nativas do JavaScript.
*/