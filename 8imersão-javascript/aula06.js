//Orientação a objetos;

// A classe Personagem define um modelo para um personagem, com atributos nome, poder e sexo.
// Além disso, tem três métodos que definem ações que o personagem pode realizar: voar, lutar e exibir o gênero.
class Personagem {
    nome = '';
    poder = 0;
    sexo = '';

    constructor(nome,poder,sexo) {
        this.nome = nome
        this.poder = poder
        this.sexo = sexo
    }

    // Método que exibe uma mensagem dizendo que o personagem está voando.
    voar() {
        console.log(`O personagem ${this.nome} está voando!`);
    }
    // Método que exibe uma mensagem dizendo que o personagem está lutando, com quantidade de poder especificada.
    lutar() {
        console.log(`O personagem ${this.nome} está lutando com o poder de luta de ${this.poder} milhões!`);
    }
    // Método que exibe uma mensagem dizendo qual é o gênero do personagem.
    genero() {
        console.log(`O personagem ${this.nome}, é do sexo ${this.sexo}.`);
    }
}

// Cria uma instância da classe Personagem e atribui valores aos seus atributos.
let goku = new Personagem('Goku',100,'Masculino');
let vegeta = new Personagem('Vegeta',99,'Masculino')
// Chama cada um dos métodos da instância de goku para que sejam executadas as ações e exibidas as mensagens na tela.
goku.genero();
goku.voar();
goku.lutar();
console.log('')
// Chama cada um dos métodos da instância de vegeta para que sejam executadas as ações e exibidas as mensagens na tela.
vegeta.genero();
vegeta.voar();
vegeta.lutar();
console.log('')

