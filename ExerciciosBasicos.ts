/**
 * Exercício 01 – Olá Mundo
 * Objetivo: imprimir uma mensagem no console.
 */
console.log("Olá, TypeScript!"); // Exibe a mensagem no console


/**
 * Exercício 02 – Variáveis simples
 * Declarar nome, idade e cidade e imprimir uma frase.
 */
let nome: string = "Eduardo"; // Variável do tipo string
let idade: number = 38;       // Variável numérica
let cidade: string = "São Paulo"; // Variável string

// Usa template string para montar a frase
console.log(`Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`);


/**
 * Exercício 03 – Par ou Ímpar
 * Testa se o número é par ou ímpar.
 */
let numero: number = 17; // Número para teste

if (numero % 2 === 0) {  // Se o resto da divisão por 2 for 0, é par
  console.log(`${numero} é PAR.`);
} else {                 // Caso contrário, é ímpar
  console.log(`${numero} é ÍMPAR.`);
}


/**
 * Exercício 04 – Maioridade
 * Verifica se a idade é maior ou menor de idade.
 */
let idadePessoa: number = 16; // Idade de teste

if (idadePessoa >= 18) {      // Se for 18 ou mais, é maior de idade
  console.log("Maior de idade.");
} else {
  console.log("Menor de idade.");
}


/**
 * Exercício 05 – Média de Notas
 * Calcula a média de 3 notas e mostra se o aluno foi aprovado.
 */
let n1: number = 7;
let n2: number = 5;
let n3: number = 9;

let media: number = (n1 + n2 + n3) / 3; // Soma e divide por 3

console.log(`Média: ${media.toFixed(2)}`); // Mostra com 2 casas decimais

if (media >= 6) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}


/**
 * Exercício 06 – Aprovado com faltas
 * Para ser aprovado: nota >= 7 e faltas <= 10.
 */
let materia: string = "Matemática";
let nota: number = 8;
let faltas: number = 12;

if (nota >= 7 && faltas <= 10) { // Ambas condições precisam ser verdadeiras
  console.log(`Aprovado em ${materia} (nota: ${nota}, faltas: ${faltas})`);
} else {
  console.log(`Reprovado em ${materia} (nota: ${nota}, faltas: ${faltas})`);
}


/**
 * Exercício 07 – Tabuada
 * Mostra a tabuada de um número de 1 a 10.
 */
let base: number = 7; // Número escolhido

for (let i = 1; i <= 10; i++) { // Loop de 1 até 10
  console.log(`${base} x ${i} = ${base * i}`);
}


/**
 * Exercício 08 – Contagem Regressiva
 * Conta de 10 até 1 e depois mostra "Lançar foguete!".
 */
for (let i = 10; i >= 1; i--) { // Loop decrescente
  console.log(i);
}
console.log("Lançar foguete!");


/**
 * Exercício 09 – Função Soma
 * Função que recebe dois números e retorna a soma.
 */
function somar(a: number, b: number): number {
  return a + b;
}

// Exemplo de uso da função
let resultadoSoma = somar(12, 30);
console.log(`Soma: ${resultadoSoma}`);


/**
 * Exercício 10 – Calculadora simples
 * Recebe dois números e uma operação (+, -, *, /).
 */
function calcular(a: number, b: number, op: string): number {
  if (op === "+") return a + b;
  if (op === "-") return a - b;
  if (op === "*") return a * b;
  if (op === "/") {
    if (b === 0) {              // Evita divisão por zero
      console.log("Erro: divisão por zero.");
      return NaN;
    }
    return a / b;
  }

  console.log("Operação inválida. Use +, -, * ou /.");
  return NaN;
}

// Exemplos de uso da calculadora
console.log(`10 + 5 = ${calcular(10, 5, "+")}`);
console.log(`10 - 5 = ${calcular(10, 5, "-")}`);
console.log(`10 * 5 = ${calcular(10, 5, "*")}`);
console.log(`10 / 5 = ${calcular(10, 5, "/")}`);


/**
 * Exercício 11 – Juros Simples
 * Fórmula: VF = Capital + (Capital * Taxa * Tempo)
 */
function jurosSimples(capital: number, taxa: number, tempo: number): number {
  return capital + (capital * taxa * tempo);
}

// Exemplo de cálculo
let capital = 1000;
let taxa = 0.05;
let tempo = 12;

let vfSimples = jurosSimples(capital, taxa, tempo);
console.log(`Juros simples -> VF: R$ ${vfSimples.toFixed(2)}`);


/**
 * Exercício 12 – Juros Compostos
 * Fórmula: VF = Capital * (1 + Taxa) ^ Tempo
 */
function jurosCompostos(capital: number, taxa: number, tempo: number): number {
  return capital * Math.pow(1 + taxa, tempo);
}

// Exemplo de cálculo
let capitalC = 1000;
let taxaC = 0.05;
let tempoC = 12;

let vfCompostos = jurosCompostos(capitalC, taxaC, tempoC);
console.log(`Juros compostos -> VF: R$ ${vfCompostos.toFixed(2)}`);


/**
 * Exercício 13 – Conversor de Temperatura
 * Fórmula: F = C * 1.8 + 32
 */
function celsiusParaFahrenheit(celsius: number): number {
  return celsius * 1.8 + 32;
}

// Exemplo de conversão
let c = 25;
let f = celsiusParaFahrenheit(c);
console.log(`${c}°C equivalem a ${f.toFixed(1)}°F`);


/**
 * Exercício 14 – Sistema de Notas
 * Retorna conceito de acordo com a nota.
 */
function conceito(nota: number): string {
  if (nota >= 90) return "A";
  else if (nota >= 80) return "B";
  else if (nota >= 70) return "C";
  else if (nota >= 60) return "D";
  else return "F";
}

// Exemplos de teste
console.log(`Nota 95 -> Conceito ${conceito(95)}`);
console.log(`Nota 82 -> Conceito ${conceito(82)}`);
console.log(`Nota 73 -> Conceito ${conceito(73)}`);
console.log(`Nota 61 -> Conceito ${conceito(61)}`);
console.log(`Nota 42 -> Conceito ${conceito(42)}`);
