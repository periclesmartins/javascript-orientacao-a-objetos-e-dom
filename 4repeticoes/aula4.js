let listaNomes = []
listaNomes.push('Dreyke')
listaNomes.push('Raquel')
listaNomes.push('Vinicius')
listaNomes.push('Lyana')
listaNomes.push('Antonio')
listaNomes.push('Kely')

console.log(`${listaNomes}: ${listaNomes.length}`)
let index = listaNomes.length-1
while (index >= 0) {
    console.log(listaNomes[index]+ " - Index: "+index)
    index--
}
console.log('Finalizei!')