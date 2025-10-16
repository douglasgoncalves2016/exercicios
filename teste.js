const prompt = require("prompt-sync")();
function cadastradarProduto(){
let produtos = [];
let continuar = "s";

    while (continuar.toLowerCase() === "s") {
    let nome = prompt("Digite o nome do produto: ");
    if(!nome){
        console.log(`Informe um nome válido`);
        return;
    }
    let preco = parseFloat(prompt("Digite o preço do produto: "));
    let quantidade = parseInt(prompt("Digite a quantidade em estoque: "));
    if(isNaN || quantidade < 0){
        console.log(`Quantidade inváldia.`);
    }

    // Criar objeto produto
    let produto = {
        nome: nome,
        preco: preco,
        quantidade: quantidade
    };

    // Adicionar no array
    produtos.push(produto);

    continuar = prompt("Deseja adicionar outro produto? (s/n): ");
    
}
return produtos;
}
