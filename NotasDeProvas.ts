// Verifica se o aluno foi aprovado ou reprovado em cada disciplina
const nomeAluno: string = "João";       // Nome do aluno
const notaMatematica: number = 8;       // Nota de Matemática
const notaPortugues: number = 7;        // Nota de Português
const notaCiencias: number = 6;         // Nota de Ciências

// Para cada matéria, verifica se a nota é maior ou igual a 7 e exibe no console
if (notaMatematica >= 7) {
    console.log(`${nomeAluno} foi aprovado em Matemática!`);
} else {
    console.log(`${nomeAluno} foi reprovado em Matemática.`);
}

if (notaPortugues >= 7) {
    console.log(`${nomeAluno} foi aprovado em Português!`);
} else {
    console.log(`${nomeAluno} foi reprovado em Português.`);
}

if (notaCiencias >= 7) {
    console.log(`${nomeAluno} foi aprovado em Ciências!`);
} else {
    console.log(`${nomeAluno} foi reprovado em Ciências.`);
      }
