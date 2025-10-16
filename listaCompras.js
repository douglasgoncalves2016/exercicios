let listaCompra = [];

listaCompra.push("Arroz"); 
listaCompra.push("Feijão");
listaCompra.push("Macarrão"); 
listaCompra.push("Carne");

let validaListaCompra = listaCompra.includes("Arroz Fruta");

if(validaListaCompra == false){
    console.log(`Não tem esse item na lista, os itens na lista são ${listaCompra}`)
}else{
    console.log(`Esse item está na lista, os itens são ${listaCompra}`)
}
//console.log(`Item na lista é ${validaListaCompra} e a lista de compras é ${listaCompra}`);

listaCompra.splice(0,1);
console.log(listaCompra);
