const readline = require('readline-sync');
let anoNascimento = parseInt(readline.question("Digite o ano que você nasceu: "));
let anoAtual = parseInt(readline.question("Digite o ano atual: "));

let calculoIdade = anoAtual - anoNascimento;
if(calculoIdade >= 18){
    console.log("Você é maior de idade");
}else{
    console.log("Você é menor de idade");
}
//console.log("A idade é " + calculoIdade + " anos.");
console.log(`A idade é ${calculoIdade} anos.`);

/*if(calculoIdade >= 21){
    console.log("Você pode tirar carteira de motorista das categorias C, D e E");
}if(calculoIdade >= 18){
    console.log("Você pode tirar carteira de motorista das categorias A e B");
}else{
    console.log("Você não pode tirar carteira de motorista");
}*/
