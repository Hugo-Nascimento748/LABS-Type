// Exercício 01 – Positivo ou Negativo
let numero: number = -5;
console.log(numero >= 0 ? `${numero} é positivo.` : `${numero} é negativo.`);

// Exercício 02 – Par ou Ímpar
let valor: number = 12;
console.log(valor % 2 === 0 ? `${valor} é par.` : `${valor} é ímpar.`);

// Exercício 03 – Maioridade
let idade: number = 17;
console.log(idade >= 18 ? "Maior de idade." : "Menor de idade.");

// Exercício 04 – Nota de aprovação
let nota: number = 5;
console.log(nota >= 6 ? "Aluno aprovado." : "Aluno reprovado.");

// Exercício 05 – Classificação etária
let idadePessoa: number = 35;
console.log(
  idadePessoa < 12 ? "Criança" :
  idadePessoa < 18 ? "Adolescente" :
  idadePessoa < 60 ? "Adulto" : "Idoso"
);

// Exercício 06 – Nota e faltas
let materia: string = "Matemática", notaFinal: number = 8, faltas: number = 12;
console.log(notaFinal >= 7 && faltas <= 10 ? `Aprovado em ${materia}.` : `Reprovado em ${materia}.`);

// Exercício 07 – Login simples
let usuario: string = "admin", senha: string = "1234";
console.log(usuario === "admin" && senha === "1234" ? "Login realizado com sucesso!" : "Usuário ou senha inválidos.");

// Exercício 08 – Desconto por idade
let idadeCliente: number = 65;
console.log(idadeCliente >= 60 ? "Cliente tem direito a desconto." : "Cliente não tem desconto.");

// Exercício 09 – Senha forte
let senhaNova: string = "abc12345";
console.log(senhaNova.length >= 8 ? "Senha forte." : "Senha fraca. Deve ter 8 ou mais caracteres.");

// Exercício 10 – Maior número
let a: number = 25, b: number = 42;
console.log(a > b ? `${a} é maior que ${b}.` : b > a ? `${b} é maior que ${a}.` : "Os números são iguais.");

// Exercício 11 – Dia da semana
let dia: number = 6;
console.log(dia >= 1 && dia <= 5 ? "Dia útil." : dia === 6 || dia === 7 ? "Final de semana." : "Número inválido para dia.");

// Exercício 12 – Faixa de notas
let notaAluno: number = 82;
console.log(notaAluno >= 90 ? "Conceito A" :
            notaAluno >= 80 ? "Conceito B" :
            notaAluno >= 70 ? "Conceito C" :
            notaAluno >= 60 ? "Conceito D" : "Conceito F");

// Exercício 13 – Temperatura
let temperatura: number = 28;
console.log(temperatura < 15 ? "Está frio." : temperatura <= 25 ? "Clima agradável." : "Está quente.");

// Exercício 14 – Triângulo válido
let lado1: number = 5, lado2: number = 7, lado3: number = 10;
console.log(lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2 ? "Forma um triângulo válido." : "Não forma um triângulo.");
