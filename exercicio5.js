const prompt = require('prompt-sync')();

function debounce(fn, delay) {
    let timerId; 
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timerId);
        timerId = setTimeout(function () {
            fn.apply(context, args); 
        }, delay);
    };
}

function acao(texto) {
    console.log("Executado:", texto);
}


const acaoDebounced = debounce(acao, 2000);

acaoDebounced("Primeiro");
acaoDebounced("Segundo");
acaoDebounced("Terceiro");


