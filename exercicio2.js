const prompt = require('prompt-sync')();

const numeroSecreto = Math.floor(Math.random() * 100) + 1;

let tentativa;
let tentativas = 0;

console.log("Tente adivinhar o número entre 1 e 100!");

do {
    tentativa = Number(prompt("Digite o seu palpite: "));
    tentativas++;

    if(tentativa < numeroSecreto){
        console.log("Mais alto! Tente novamente.");
    } else if (tentativa > numeroSecreto) {
        console.log("Mais baixo! Tente novamente.");
    } else {
        console.log(`Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativas.`)
    }
} while (tentativa !== numeroSecreto);