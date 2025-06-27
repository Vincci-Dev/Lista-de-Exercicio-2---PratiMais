const prompt = require('prompt-sync')();

function memoize(fn) {
    const cache = {}; 

    return function (...args) {
        const chave = JSON.stringify(args);

        if (cache[chave]) {
            console.log("Usando cache para:", args);
            return cache[chave];
        }

        const resultado = fn.apply(this, args);
        cache[chave] = resultado;
        return resultado;
    };
}

function fatorial(n) {
    if (n === 0) return 1;
    return n * fatorial(n - 1);
}

const fatorialMemo = memoize(fatorial);

console.log(fatorialMemo(5)); 
console.log(fatorialMemo(5)); 
console.log(fatorialMemo(6)); 