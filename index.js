//Definindo a Classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
    
  //Método para realizar o ataque  
    atacar() {  
      let ataque;
  
      if (this.tipo == "mago") {
        ataque = "magia";
      } else if (this.tipo == "guerreiro") {
        ataque = "espada";
      } else if (this.tipo == "monge") {
        ataque = "artes marciais";
      } else if (this.tipo == "ninja") {
        ataque = "shuriken";
      }
      
  //Exibindo a mensagem do ataque
      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
  }
  
  //Criando uma instância da classe Heroi
  let heroi1 = new Heroi("David", 119, "guerreiro");
  
  heroi1.atacar();  