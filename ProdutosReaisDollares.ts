/**
 * Função que converte um preço em dólares para reais, aplicando também o IOF.
 * @param precoEmDolar - valor do produto em dólares
 * @param taxaDeCambio - valor da cotação do dólar em reais
 * @param iof - percentual do IOF (padrão 6.38%)
 * @returns um objeto contendo:
 *   - precoEmReais: preço convertido sem IOF
 *   - valorIOF: valor do IOF calculado
 *   - precoComIOF: preço final já incluindo o IOF
 */
function converterPrecoParaReais(
    precoEmDolar: number,
    taxaDeCambio: number,
    iof: number = 6.38
): { precoEmReais: number, valorIOF: number, precoComIOF: number } {

    // Converte o preço de dólares para reais
    const precoEmReais = precoEmDolar * taxaDeCambio;

    // Calcula o valor do IOF com base no preço em reais
    const valorIOF = precoEmReais * (iof / 100);

    // Soma o valor do IOF ao preço convertido para obter o preço final
    const precoComIOF = precoEmReais + valorIOF;

    // Retorna os valores calculados em um objeto
    return { precoEmReais, valorIOF, precoComIOF };
}

// Lista de produtos com seus preços em dólares
const produtos = [
    { nome: "Mouse", precoEmDolar: 25 },
    { nome: "Teclado", precoEmDolar: 40 },
    { nome: "Monitor", precoEmDolar: 200 },
    { nome: "HD Externo", precoEmDolar: 100 },
    { nome: "SSD", precoEmDolar: 120 },
    { nome: "Placa de Vídeo", precoEmDolar: 500 },
    { nome: "Processador", precoEmDolar: 300 },
    { nome: "Memória RAM", precoEmDolar: 80 },
    { nome: "Fonte", precoEmDolar: 150 },
    { nome: "Gabinete", precoEmDolar: 70 },
];

// Cotação do dólar em reais
const taxaDeCambio = 5.10;

// Itera sobre cada produto e converte o preço para reais, exibindo no console
produtos.forEach(produto => {
    // Chama a função de conversão
    const { precoEmReais, valorIOF, precoComIOF } = converterPrecoParaReais(produto.precoEmDolar, taxaDeCambio);

    // Exibe informações detalhadas do produto
    console.log(`Produto: ${produto.nome}`);
    console.log(`Preço em Dólares: $${produto.precoEmDolar.toFixed(2)}`);
    console.log(`Preço em Reais (sem IOF): R$ ${precoEmReais.toFixed(2)}`);
    console.log(`Valor do IOF: R$ ${valorIOF.toFixed(2)}`);
    console.log(`Preço final com IOF: R$ ${precoComIOF.toFixed(2)}\n`);
});
