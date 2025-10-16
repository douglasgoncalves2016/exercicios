const readline = require('readline-sync');
let n1 = parseInt(readline.question("Digite um número: "));

for(let i = 1; i <= 10; i++){
    console.log(`A tabuada de ${n1} é ${n1*i}`)
}