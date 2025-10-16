let listaDeProdutos = [
{nome: "lápis", preco: 3.50, qt: 100},
{nome:"caderno", preco: 25, qt: 250},
{nome: "caneta", preco: 7, qt: 50},
];

listaDeProdutos.forEach((p, i) => {
    console.log(i+1, "-", p.nome, "-", "R$", p.preco, "-", p.qt, "unid")
});
console.log("-------------------");
let soma = 0;
listaDeProdutos.forEach((p, i) => {
   soma+=p.preco*p.qt;
   i+1;
});
console.log("A soma total é ", soma);

/*
let somaQt = 0;
listaDeProdutos.forEach((p, i) =>{
    somaQt+=p.qt;
    i+1;
})
console.log(somaQt);*/

 