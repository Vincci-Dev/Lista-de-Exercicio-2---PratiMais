const prompt = require("prompt-sync")();

let frase = prompt("Digite uma frase: ");

let palavras = frase.split(" ");

let palavarsUnicas = [];

for (let i = 0; i < palavras.length; i++) {
  let palavraAtual = palavras[i];
  let contador = 0;

  for (let j = 0; j < palavras.length; j++) {
    if (palavraAtual === palavras[j]) {
      contador++;
    }
  }
  if (contador === 1) {
    palavarsUnicas.push(palavraAtual);
  }
}

console.log("Palavras únicas:", palavarsUnicas);