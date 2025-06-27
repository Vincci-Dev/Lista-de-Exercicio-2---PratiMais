function paresParaObjeto(pares) {
    const obj = {};

    for (let i = 0; i < pares.length; i++) {
        const chave = pares[i][0];
        const valor = pares[i][1];
        obj[chave] = valor; 
    }

    return obj;
}

function objetoParaPares(obj) {
    const pares = [];

    for (let chave in obj) {
        if (obj.hasOwnProperty(chave)) {
            pares.push([chave, obj[chave]]); 
        }
    }

    return pares;
}

const pares = [["nome", "Vinicius"], ["idade", 28]];

const obj = paresParaObjeto(pares);
console.log("Objeto gerado:", obj);

const paresConvertidos = objetoParaPares(obj);
console.log("Array de pares:", paresConvertidos);
