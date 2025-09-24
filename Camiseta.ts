// Calcula o preço final de uma camiseta com desconto
let camiseta: number = 80;          // Preço original da camiseta
let desconto: number = 0.15;        // Percentual de desconto (15%)

let valorDesconto: number = camiseta * desconto; // Calcula o valor do desconto
let precoFinal: number = camiseta - valorDesconto; // Calcula o preço final com desconto aplicado

// Mostra os resultados no console
console.log("Preço original: R$", camiseta);
console.log("Desconto: R$", valorDesconto);
console.log("Preço final com desconto: R$", precoFinal);
