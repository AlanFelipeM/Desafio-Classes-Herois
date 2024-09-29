// Classe que representa um herói
class Heroi {
  constructor(nome, idade, tipo) {
      this.nome = nome; // Propriedade nome
      this.idade = idade; // Propriedade idade
      this.tipo = tipo; // Propriedade tipo
      this.vida = 100; // Vida inicial do herói
      this.nivel = 1; // Nível inicial do herói
  }

  // Método para atacar
  atacar() {
      let ataque;
      
      // Estrutura de decisão para determinar o tipo de ataque
      switch (this.tipo.toLowerCase()) {
          case 'mago':
              ataque = 'magia poderosa ✨';
              break;
          case 'guerreiro':
              ataque = 'golpe com espada afiada ⚔️';
              break;
          case 'monge':
              ataque = 'artes marciais fluídas 🥋';
              break;
          case 'ninja':
              ataque = 'shuriken veloz 🥷';
              break;
          default:
              ataque = 'ataque desconhecido ❓';
      }

      // Exibe a mensagem de ataque
      console.log(`${this.nome}, o ${this.tipo}, ataca com ${ataque}! 💥`);
  }

  // Método para receber dano
  receberDano(dano) {
      this.vida -= dano;
      if (this.vida < 0) this.vida = 0; // Garantir que a vida não fique negativa
      console.log(`${this.nome} recebeu ${dano} de dano! 😱`);
      console.log(`Vida restante: ${this.vida} pontos.`);
      if (this.vida === 0) {
          console.log(`${this.nome} caiu em combate! ⚰️`);
      }
  }

  // Método para curar
  curar(pontos) {
      const vidaAntes = this.vida;
      this.vida += pontos;
      if (this.vida > 100) this.vida = 100; // Garantir que a vida não ultrapasse 100
      console.log(`${this.nome} se cura em ${pontos} pontos! 💖`);
      console.log(`Vida antes da cura: ${vidaAntes} pontos.`);
      console.log(`Vida após a cura: ${this.vida} pontos.`);
  }

  // Método para aumentar nível
  aumentarNivel() {
      this.nivel++;
      console.log(`${this.nome} subiu para o nível ${this.nivel}! 🎉`);
  }
}

// Função para simular a criação de heróis e suas interações
function iniciarJogo() {
  // Array de heróis
  const herois = [
      new Heroi('Gandalf', 300, 'Mago'),
      new Heroi('Aragorn', 87, 'Guerreiro'),
      new Heroi('Shaolin', 30, 'Monge'),
      new Heroi('Naruto', 18, 'Ninja'),
  ];

  console.log("Os heróis se preparam para a batalha! ⚔️✨\n");

  // Laço de repetição para os ataques
  for (let i = 0; i < herois.length; i++) {
      herois[i].atacar(); // Chama o método atacar para cada herói
  }

  console.log("\nOs heróis enfrentam inimigos ferozes! 🐉💥\n");

  // Simular receber dano
  herois[0].receberDano(20); // Gandalf recebe 20 de dano
  herois[1].receberDano(30); // Aragorn recebe 30 de dano

  console.log("\nA batalha continua...\n");

  // Simular curar
  herois[0].curar(15); // Gandalf cura 15 pontos
  herois[1].curar(10); // Aragorn cura 10 pontos

  console.log("\nOs heróis se fortalecem e lutam novamente! 💪💖\n");

  // Aumentar nível dos heróis
  herois[0].aumentarNivel(); // Gandalf sobe de nível
  herois[1].aumentarNivel(); // Aragorn sobe de nível

  // Novo ataque após receber dano e curar
  for (let i = 0; i < herois.length; i++) {
      herois[i].atacar(); // Chama o método atacar novamente
  }

  console.log("\nA batalha chega ao fim, e os heróis se reúnem! 🎊\n");
}

// Inicia o jogo
iniciarJogo();
