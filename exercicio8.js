function agruparPorCliente(vendas) {
    return vendas.reduce(function (acumulador, venda) {
        const cliente = venda.cliente;
        const total = venda.total;

        if (acumulador[cliente]) {
            acumulador[cliente] += total;
        } else {
            acumulador[cliente] = total;
        }

        return acumulador;
    }, {});
}

const vendas = [
    { cliente: "João", total: 100 },
    { cliente: "Maria", total: 200 },
    { cliente: "João", total: 50 },
    { cliente: "Carlos", total: 300 },
    { cliente: "Maria", total: 150 }
];

const resultado = agruparPorCliente(vendas);
console.log(resultado);
