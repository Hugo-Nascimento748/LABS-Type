// Declara os dados do aluno: nome, notas e número de faltas em cada matéria
const nomeAluno1: string = "João";
const notaMatematica1: number = 8;
const notaPortugues1: number = 7;
const notaCiencias1: number = 6;
const faltasMatematica1: number = 3; // Faltas em Matemática
const faltasPortugues1: number = 2;  // Faltas em Português
const faltasCiencias1: number = 6;   // Faltas em Ciências

// Para cada matéria, verifica:
// 1. Se a nota é maior ou igual a 7 E o número de faltas é menor ou igual a 5 → APROVADO
// 2. Se o número de faltas for maior que 5 → REPROVADO POR FALTAS
// 3. Caso contrário → REPROVADO POR NOTA

if (notaMatematica1 >= 7 && faltasMatematica1 <= 5) {
    console.log(`${nomeAluno1} foi aprovado em Matemática!`);
} else if (faltasMatematica1 > 5) {
    console.log(`${nomeAluno1} foi reprovado em Matemática devido ao número de faltas.`);
} else {
    console.log(`${nomeAluno1} foi reprovado em Matemática devido à nota.`);
}

if (notaPortugues1 >= 7 && faltasPortugues1 <= 5) {
    console.log(`${nomeAluno1} foi aprovado em Português!`);
} else if (faltasPortugues1 > 5) {
    console.log(`${nomeAluno1} foi reprovado em Português devido ao número de faltas.`);
} else {
    console.log(`${nomeAluno1} foi reprovado em Português devido à nota.`);
}

if (notaCiencias1 >= 7 && faltasCiencias1 <= 5) {
    console.log(`${nomeAluno1} foi aprovado em Ciências!`);
} else if (faltasCiencias1 > 5) {
    console.log(`${nomeAluno1} foi reprovado em Ciências devido ao número de faltas.`);
} else {
    console.log(`${nomeAluno1} foi reprovado em Ciências devido à nota.`);
}
