let listaDeProdutos = [
{nome: "lápis", preco: "3,50", qt: 100},
{nome:"caderno", preco: "25", qt: 250},
{nome: "caneta", preco: '7', qt: 50},
];

listaDeProdutos.forEach((p, i) => {
    console.log(i+1, "-", p.nome, "-", "R$", p.preco, "-", p.qt, "unid")
});