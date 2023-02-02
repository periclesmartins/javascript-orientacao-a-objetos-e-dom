// Classes e Objetos
class Pessoa {
    // Caracteristicas - atributos
    peso
    altura
    cor_cabelo
    data_nascimento
    sexo

    constructor(peso, altura, cor_cabelo, data_nascimento, sexo) {
        this.peso = peso
        this.altura = altura
        this.cor_cabelo = cor_cabelo
        this.data_nascimento = data_nascimento
        this.sexo = sexo
    }

    andar(formaDeAndar) {
        console.log(formaDeAndar)
    }
    chorar(tipoDeChoro) {
        console.log(tipoDeChoro)
    }
}

let crianca = new Pessoa(5, 0.65, "preto", "29032018", "m")
let adolescente = new Pessoa(5, 1.65, "loiro", "29032006", "m")
let adulto = new Pessoa(65, 1.75, "preto", "29031997", "m")

crianca.andar('Engatinhar')
crianca.chorar('Berrar')
console.log(crianca.altura)