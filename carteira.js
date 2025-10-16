const readline = require('readline-sync');
let idade = parseInt(readline.question("Digite sua idade: "));

if(idade >= 21){
    console.log("Você pode tirar carteira de motorista das categorias C, D e E");
}else if(idade >= 18){
    console.log("Você pode tirar carteira de motorista das categorias A e B");
}else{
    console.log("Você não pode tirar carteira de motorista");
}console.log(`A idade é ${idade} anos.`);




//console.log("A idade é : " + idade);

/*if(idade >= 18){
    console.log("Você é maior de idade");
}else{
    console.log("Você é menor de idade");
}console.log("A idade é : " + idade);*/