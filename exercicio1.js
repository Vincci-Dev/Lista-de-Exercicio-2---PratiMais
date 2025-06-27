const prompt = require('prompt-sync')();

function anoBissexto(ano){
    return ( ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

function ehDataValida(dia, mes, ano){
    if(mes < 1 || mes > 12) {
        return false;
    }

    let diaNoMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

if(anoBissexto(ano)){
    diaNoMes[1] = 29;
}

if(dia < 1 || dia > diaNoMes[mes - 1]) {
    return false;
}

return true;

}



let dia = Number(prompt("Digite o dia: "));
let mes = Number(prompt("Digite o mês: "));
let ano = Number(prompt("Digite o ano: "));

if(ehDataValida(dia, mes, ano)){
    console.log("A data é válida.");
} else {
    console.log("A data é inválida.")
}