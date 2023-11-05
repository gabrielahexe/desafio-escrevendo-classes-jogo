class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar() {
        let ataque = ""
        
        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "ataque desconhecido";
                break;
        }
        
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}.`)

    }
}

const heroiMago = new heroi("kikkyou", 28, "mago")
const heroiGuerreiro = new heroi("Paladino", 30, "guerreiro")
const heroiNinja = new heroi("Naruto", 23, "ninja")
const heroiMonge = new heroi("Hashiro", 40, "monge")

heroiMago.atacar();
heroiGuerreiro.atacar();
heroiNinja.atacar();
heroiMonge.atacar();
