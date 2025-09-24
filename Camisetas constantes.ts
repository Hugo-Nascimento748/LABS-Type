// Calcula o preço final de uma camiseta com desconto usando constantes
const camiseta1: number = 80;        // Preço original da camiseta
const desconto1: number = 0.15;      // Percentual de desconto (15%)

const valorDesconto1: number = camiseta1 * desconto1; // Calcula o valor do desconto
const precoFinal1: number = camiseta1 - valorDesconto1; // Calcula o preço final após o desconto

// Exibe os valores no console
console.log("Preço original: R$", camiseta1);
console.log("Desconto: R$", valorDesconto1);
console.log("Preço final com desconto: R$", precoFinal1);
