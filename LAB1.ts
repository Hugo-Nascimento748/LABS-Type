// 1) Variáveis simples + inferência
const nomeAluno = 'Ana';    // string inferido pelo TS, não precisamos declarar explicitamente
let nota1 = 8.5;            // number inferido
let nota2 = 7;              // number inferido
let aprovado = true;        // boolean inferido
console.log('1) Variáveis:', { nomeAluno, nota1, nota2, aprovado }); 
// imprime todas as variáveis, mostrando os tipos e valores atuais

// 2) Função média tipada
function media(a: number, b: number): number {
  return Number(((a + b) / 2).toFixed(2)); 
  // calcula a média de dois números, arredonda para 2 casas decimais e converte para number
}
const mediaAna = media(nota1, nota2); // chama função usando notas da Ana
console.log('2) Média de Ana:', mediaAna); // mostra a média calculada

// 3) Array tipado + map/filter
const notas: number[] = [6, 7.5, 8, 9.2, 10]; // array de números (notas)
const acimaDe8 = notas.filter(n => n >= 8);   
// filter cria um novo array com notas maiores ou iguais a 8
const mediasAjustadas = notas.map(n => Math.min(n + 0.5, 10)); 
// map cria um novo array, adiciona 0.5 a cada nota, limite máximo 10
console.log('3) Arrays:', { acimaDe8, mediasAjustadas }); // imprime arrays filtrados e ajustados

// 4) Tupla
const registro: [string, number] = ['Edu', media(9, 8.5)]; 
// tupla: primeiro valor string (nome), segundo number (média calculada)
console.log('4) Tupla (nome, média):', registro); // mostra a tupla completa

// 5) Type + lista de alunos
type Aluno = { id: string; nome: string; notas: number[] }; 
// define estrutura de objeto para alunos
const alunos: Aluno[] = [
  { id: 'a1', nome: 'Ana',  notas: [8, 7.5, 9] },
  { id: 'a2', nome: 'Bia',  notas: [6, 6.5, 7] },
  { id: 'a3', nome: 'Cris', notas: [9.5, 8.5, 10] },
];
// array de alunos seguindo o tipo definido
function mediaAluno(a: Aluno): number { 
  const soma = a.notas.reduce((acc, n) => acc + n, 0); 
  // reduce soma todas as notas do aluno
  return Number((soma / a.notas.length).toFixed(2)); 
  // divide pelo número de notas e arredonda
}
console.log('5) Médias:', alunos.map(a => ({ nome: a.nome, media: mediaAluno(a) })));
// cria novo array com objetos contendo nome e média de cada aluno e imprime

// 6) União de tipos + narrowing
type Id = number | string; 
// id pode ser número ou string
function formatarId(id: Id): string {
  // narrowing: verifica tipo em tempo de execução
  return typeof id === 'number' ? id.toString().padStart(3, '0') : id.toUpperCase();
  // se number, converte para string e adiciona zeros à esquerda
  // se string, converte para maiúscula
}
console.log('6) União:', formatarId(7), formatarId('a3')); 
// imprime id formatado para number e string

// 7) Enum + classificação
enum StatusAluno { Aprovado = 'APROVADO', Recuperacao = 'RECUPERAÇÃO', Reprovado = 'REPROVADO' } 
// enum define valores fixos de status
function statusPorMedia(m: number): StatusAluno {
  if (m >= 7) return StatusAluno.Aprovado; // nota >=7 → aprovado
  if (m >= 5) return StatusAluno.Recuperacao; // nota 5-6.99 → recuperação
  return StatusAluno.Reprovado; // nota <5 → reprovado
}
console.log('7) Status:', alunos.map(a => ({ nome: a.nome, status: statusPorMedia(mediaAluno(a)) })));
// imprime nome e status de cada aluno baseado na média

// 8) Map nome → média
const mediasPorNome = new Map<string, number>(); 
// cria mapa (estrutura chave → valor)
for (const a of alunos) mediasPorNome.set(a.nome, mediaAluno(a)); 
// adiciona cada aluno ao map: nome como chave, média como valor
console.log('8) Map (nome→média):', Array.from(mediasPorNome.entries())); 
// converte Map em array e imprime

export {}; // evita conflito de nomes no escopo global

