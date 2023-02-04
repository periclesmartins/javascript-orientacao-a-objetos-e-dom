//Classes e objetos;
class Heroi {
    // Atributos, ou seja, as caracteristicas;
    forca 
    arma
    peso
    altura
    tipo_de_roupa
    capacete
    poder
    comportamento

    //inicializando os atributos;
    constructor(forca, arma, peso, altura, tipo_de_roupa, capacete, poder, comportamento) {
        this.forca = forca
        this.arma = arma 
        this.peso = peso 
        this.altura = altura 
        this.tipo_de_roupa = tipo_de_roupa
        this.capacete = capacete
        this.poder = poder 
        this.comportamento = comportamento
    }
    //comportamentos - metodos - funções;
    soltarPoder(tipoDoPoder) {
        console.log(tipoDoPoder)
    }

    dialogar(frase) {
        console.log(frase)
    }
}
// caracteristicas = (forca, arma, peso, altura, tipo_de_roupa, capacete, poder, comportamento)
let hulk = new Heroi("100%", "punhos", "500 kg", "2,5 metros", "shorts", false, "força bruta, regeneração, intelecto genial", "furioso")
let capitao_america = new Heroi("50%", "escudo", "89kg", "1,87 metros", "uniforme", true, "força, agilidade, super resistência, e inteligência", "patriota")
let homem_ferro = new Heroi("60%", "armadura homem de ferro", "193kg", "2 metros", "armadura tecnológica vermelha", true, "voa, solta laser, inteligência artificial avançada, e etc", "irônico e engraçado")

hulk.dialogar("Hulk Esmaga!")
hulk.soltarPoder("Super socos!")

capitao_america.dialogar("Stark!")
capitao_america.soltarPoder("Lançar escudo")