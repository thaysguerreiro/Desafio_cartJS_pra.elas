const cart = require('./cart.json')
//console.log(Cart);

// 1. calcular a quantidade de produtos no objeto cart.
// 2. somar o valor total do cart.
// 3. imprimir o nome de cada produto no cart.

var itemQuant = 0;
var valor = 0;
var produtos = "";

for (let i = 0; i < cart.items.length; i++) {
    itemQuant += cart.items[i].quantity;

valor += cart.items[i].price * cart.items[i].quantity;

produtos += cart.items[i].title + "\n";
}
valor/= 100;

console.log("Produtos adicionados ao cart:" + "\n" + produtos);
console.log("Quantidade de itens:" + itemQuant + "\n");
console.log("Valor Total:" + "R$" + valor.toFixed(2) + "\n");

if (valor => 34900) {
    console.log("Parabéns, você ganhou frete grátis!!")
}
