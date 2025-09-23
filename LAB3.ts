/**
 * ts/ex3_servidor.ts
 * Conceitos: arrays numéricos, objetos, funções, enum, narrowing, média móvel simples
 */

// 1) Leituras simples + média
const leiturasC: number[] = [22.5, 23.1, 24.0, 25.2, 26.5]; 
// array de temperaturas em °C

const mediaTemp = Number(
  (leiturasC.reduce((a, b) => a + b, 0) / leiturasC.length).toFixed(2)
); 
// calcula a média somando todas as leituras e dividindo pelo número de elementos, arredonda para 2 casas

console.log('1) Média (°C):', mediaTemp); 
// imprime a média das temperaturas

// 2) Objeto de leitura + conversão C↔F
type Leitura = { timestamp: string; tempC: number }; 
// tipo para armazenar leitura com timestamp e temperatura em °C

function cToF(c: number): number { 
  return Number((c * 9/5 + 32).toFixed(2)); 
} 
// converte Celsius para Fahrenheit, arredondando para 2 casas

const l1: Leitura = { timestamp: new Date().toISOString(), tempC: 25.3 }; 
// cria uma leitura com hora atual e temperatura

console.log('2) Leitura:', l1, '=> °F:', cToF(l1.tempC)); 
// imprime objeto leitura e temperatura convertida

// 3) Enum de alerta + função de status
enum Alerta { Ok = 'OK', Atenção = 'ATENCAO', Crítico = 'CRITICO' } 
// enum para status de alerta

function classificar(tC: number): Alerta {
  if (tC >= 28) return Alerta.Crítico; // temperatura >=28°C → crítico
  if (tC >= 25) return Alerta.Atenção; // 25–27.99°C → atenção
  return Alerta.Ok;                     // <25°C → ok
}

console.log('3) Status:', leiturasC.map(t => ({ t, status: classificar(t) }))); 
// mapeia cada leitura para um objeto com temperatura e status

// 4) Moving Average (média móvel simples) com janela N
function mediaMovel(valores: number[], janela: number): number[] {
  const out: number[] = []; // array que vai armazenar médias móveis
  for (let i = 0; i < valores.length; i++) {
    const ini = Math.max(0, i - janela + 1); 
    // calcula índice inicial da janela, garantindo que não seja negativo
    const slice = valores.slice(ini, i + 1); 
    // pega subarray com valores da janela atual
    out.push(Number((slice.reduce((a, b) => a + b, 0) / slice.length).toFixed(2))); 
    // calcula média da janela e adiciona no array de saída
  }
  return out; // retorna array de médias móveis
}

console.log('4) Média móvel (janela=3):', mediaMovel(leiturasC, 3)); 
// imprime média móvel com janela de 3 leituras

// 5) União de unidade + narrowing
type Unidade = 'C' | 'F'; 
// tipo literal para unidades possíveis

function formatTemp(valor: number, unidade: Unidade): string {
  if (unidade === 'C') return `${valor.toFixed(1)} °C`; 
  // se unidade for Celsius
  return `${valor.toFixed(1)} °F`; 
  // se unidade for Fahrenheit
}

console.log('5) Format:', formatTemp(25.35, 'C'), formatTemp(cToF(25.35), 'F')); 
// imprime temperatura formatada nas duas unidades

export {}; 
// evita poluir escopo global
