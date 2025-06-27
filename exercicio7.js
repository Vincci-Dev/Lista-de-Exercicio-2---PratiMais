function nomesOrdenadosPorPreco(produtos) {
    const ordenados = produtos.slice().sort(function(a, b) {
        return a.preco - b.preco; 
    });
    const nomes = ordenados.map(function(produto) {
        return produto.nome;
    });

    return nomes;
}

const produtos = [
    { nome: "Mouse", preco: 50 },
    { nome: "Teclado", preco: 80 },
    { nome: "Monitor", preco: 600 },
    { nome: "Cabo HDMI", preco: 20 }
];

const nomesOrdenados = nomesOrdenadosPorPreco(produtos);
console.log(nomesOrdenados);
