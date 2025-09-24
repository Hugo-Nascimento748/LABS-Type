// Exercício 01 – Contador simples de 1 a 10
let i: number = 1;
while (i <= 10) { console.log(i); i++; }

// Exercício 02 – Contagem regressiva de 10 a 1 e fim
let n: number = 10;
while (n >= 1) { console.log(n); n--; }
console.log("FIM");

// Exercício 03 – Soma de 1 até N (N=100)
let N: number = 100, soma: number = 0, k: number = 1;
while (k <= N) { soma += k; k++; }
console.log(`Soma de 1 até ${N} = ${soma}`);

// Exercício 04 – Tabuada do número base (7)
let base: number = 7, mult: number = 1;
while (mult <= 10) { console.log(`${base} x ${mult} = ${base * mult}`); mult++; }

// Exercício 05 – Números pares de 1 a 50
let x: number = 1;
while (x <= 50) { if (x % 2 === 0) console.log(x); x++; }

// Exercício 06 – Fatorial de 5
let num: number = 5, fat: number = 1, c: number = num;
while (c > 1) { fat *= c; c--; }
console.log(`${num}! = ${fat}`);

// Exercício 07 – Fibonacci (10 primeiros números)
let a: number = 0, b: number = 1, termos: number = 10, contador: number = 1;
while (contador <= termos) { console.log(a); let proximo = a + b; a = b; b = proximo; contador++; }

// Exercício 08 – Soma de valores de um array
let valores: number[] = [10, 20, 30, 40, 50], idx: number = 0, total: number = 0;
while (idx < valores.length) { total += valores[idx]; idx++; }
console.log(`Total = ${total}`);

// Exercício 09 – Maior valor de um array
let nums: number[] = [5, 12, 3, 27, 9, 27, 1], iMax: number = 0, maior: number = nums[0];
while (iMax < nums.length) { if (nums[iMax] > maior) maior = nums[iMax]; iMax++; }
console.log(`Maior valor = ${maior}`);

// Exercício 10 – Busca linear em array
let lista: string[] = ["sql","ts","js","python","go"], alvo: string = "python", pos: number = 0, encontrado: boolean = false;
while (pos < lista.length) { if (lista[pos] === alvo) { encontrado = true; break; } pos++; }
console.log(encontrado ? `Encontrado em lista[${pos}]` : "Não encontrado");

// Exercício 11 – Inverter string
let texto: string = "TypeScript", invertido: string = "", p: number = texto.length - 1;
while (p >= 0) { invertido += texto[p]; p--; }
console.log(`Original: ${texto}`); console.log(`Invertido: ${invertido}`);

// Exercício 12 – Palíndromo
let palavra: string = "radar", esq: number = 0, dir: number = palavra.length - 1, ehPalindromo: boolean = true;
while (esq < dir) { if (palavra[esq] !== palavra[dir]) { ehPalindromo = false; break; } esq++; dir--; }
console.log(ehPalindromo ? "É palíndromo" : "Não é palíndromo");

// Exercício 13 – do...while: somar aleatórios até ultrapassar 50
let acumulador: number = 0, sorteado: number;
do { sorteado = Math.floor(Math.random()*10)+1; acumulador += sorteado; console.log(`Sorteado: ${sorteado} | Acumulado: ${acumulador}`); } while(acumulador <= 50);
console.log("Limite atingido!");

// Exercício 14 – continue: números 1 a 20, pulando múltiplos de 3
let m: number = 1;
while (m <= 20) { if (m % 3 === 0) { m++; continue; } console.log(m); m++; }
  
