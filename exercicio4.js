const prompt = require("prompt-sync")();

function fatorial (n){
    if(n < 0) {
        console.log("Fatorial não definido para números negativos.");
    } else if (n === 0){
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}

try {
    const numero = Number(prompt("Digite um número inteiro para calcular o fatorial: "));
    const resultado = fatorial(numero);
    console.log(`O fatorial de ${numero} é ${resultado}`);

}catch(erro){
    console.log("Erro:", erro.message);
}