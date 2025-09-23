/**
 * ts/ex2_veiculos.ts
 * Conceitos: literais, união, enum, objetos, arrays, Map, funções utilitárias
 */

// 1) Literais + união
type Tipo = 'carro' | 'moto' | 'caminhao'; 
// define que um veículo só pode ser um desses três tipos (literal union)
type Placa = string; 
// placa é apenas string, mas criamos um alias para melhor semântica

interface Veiculo {
  placa: Placa;
  tipo: Tipo;
  ano: number;
  fabricante: string;
  cor: string;
}
// interface define a estrutura de um veículo

const v1: Veiculo = { placa: 'ABC1D23', tipo: 'carro', ano: 2020, fabricante: 'Chevrolet', cor: 'preto' };
// cria objeto v1 seguindo a interface Veiculo
console.log('1) Veículo:', v1); 
// imprime o veículo

// 2) Lista + filtros + mapeamentos
const frota: Veiculo[] = [
  v1,
  { placa: 'XYZ9K88', tipo: 'moto', ano: 2018, fabricante: 'Honda', cor: 'vermelho' },
  { placa: 'JKL2M34', tipo: 'caminhao', ano: 2022, fabricante: 'Volvo', cor: 'branco' },
];
// array de veículos (frota)

const soCarros = frota.filter(v => v.tipo === 'carro'); 
// cria um novo array com apenas veículos do tipo 'carro'
const anos = frota.map(v => v.ano); 
// cria array contendo apenas o ano de cada veículo
console.log('2) Filtros/Map:', { soCarros, anos }); 
// imprime os arrays filtrado e mapeado

// 3) Enum + helpers
enum CorPadrao { Preto = 'preto', Branco = 'branco', Vermelho = 'vermelho' } 
// enum define cores padrão válidas

function pintar(v: Veiculo, cor: CorPadrao): Veiculo {
  return { ...v, cor }; 
  // retorna uma cópia do veículo com a cor alterada (não modifica o original)
}
console.log('3) Pintando veículo:', pintar(v1, CorPadrao.Branco)); 
// imprime veículo pintado de branco

// 4) Função utilitária: normalizar placa
function normalizarPlaca(p: string): Placa {
  return p.replace(/[^A-Za-z0-9]/g, '').toUpperCase(); 
  // remove caracteres inválidos e converte para maiúscula
}
console.log('4) Placa normalizada:', normalizarPlaca('abc-1d23')); 
// imprime 'ABC1D23'

// 5) Map por tipo (agrupamento)
const porTipo = new Map<Tipo, Veiculo[]>(); 
// cria Map para agrupar veículos por tipo

for (const v of frota) {
  const arr = porTipo.get(v.tipo) ?? []; 
  // pega array existente ou cria novo se não houver
  arr.push(v); 
  // adiciona veículo no array
  porTipo.set(v.tipo, arr); 
  // atualiza Map com o array atualizado
}
console.log('5) Agrupados por tipo:', Array.from(porTipo.entries())); 
// converte Map em array de pares [tipo, array de veículos] e imprime

export {}; 
// evita poluir escopo global

