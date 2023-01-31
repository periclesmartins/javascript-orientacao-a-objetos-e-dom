//Listas
let nome1 = 'Vinicius'
let nome2 = 'Dreyke'
let nome3 = 'Antonio'
let nome4 = 'Raimundo'
let nome5 = 'Pedro'
let nome6 = 'Welligton'
let nome7 = 'Alef'

// Index = em javascript, o primeiro da lista é 0, e não 1.

let listaDeNomes1 = [nome1, nome2, nome3]
let listaDeNomes2 = [nome4, nome5, nome6, nome7]
let listaDeNomesCompleta = listaDeNomes1.concat(listaDeNomes2) //.concat concatena duas ou mais strings.
listaDeNomesCompleta.sort() //Esse comando exibe a lista em ordem alfabética, ele também serve para números, a função dele é ordenar listas.
console.log(`A lista tem ${listaDeNomesCompleta.length} nomes.`) //.lenght exibe a quantidade de dados dentro da variável.
console.log(listaDeNomesCompleta)
console.log(listaDeNomesCompleta[0]) //caso queira pegar um único valor dentro da variável.