const readline = require('readline-sync');
let numero = parseInt(readline.question("Digite um número: "));

if(isNaN(numero)){
console.log("Por favor, digite um número válido.");
} else{
    for(let i = 1; i <= 10; i++) {
    console.log(`O tabuada de ${numero} x ${i} é ${numero*i}`);
}
}