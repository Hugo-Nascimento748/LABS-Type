/**
 * Função que converte o preço de um produto em dólares para reais,
 * aplica o IOF e calcula o preço de venda considerando uma margem de lucro.
 * 
 * @param precoEmDolar1 - valor do produto em dólares
 * @param taxaDeCambio1 - cotação do dólar em reais
 * @param iof1 - percentual do IOF (padrão 6.38%)
 * @param lucro1 - percentual de lucro sobre o preço final com IOF (padrão 45%)
 * @returns um objeto contendo:
 *   - precoEmReais1: preço convertido para reais sem IOF
 *   - valorIOF1: valor do IOF calculado
 *   - precoComIOF1: preço final já incluindo o IOF
 *   - precoVenda1: preço de venda incluindo o lucro
 */
function converterPrecoParaReais1(
    precoEmDolar1: number,
    taxaDeCambio1: number,
    iof1: number = 6.38,
    lucro1: number = 45
): { precoEmReais1: number, valorIOF1: number, precoComIOF1: number, precoVenda1: number } {

    // Converte o preço de dólares para reais
    const precoEmReais1 = precoEmDolar1 * taxaDeCambio1;

    // Calcula o valor do IOF com base no preço em reais
    const valorIOF1 = precoEmReais1 * (iof1 / 100);

    // Soma o valor do IOF ao preço convertido para obter o preço final
    const precoComIOF1 = precoEmReais1 + valorIOF1;

    // Calcula o preço de venda aplicando o percentual de lucro
    const precoVenda1 = precoComIOF1 * (1 + lucro1 / 100);

    // Retorna todos os valores calculados
    return { precoEmReais1, valorIOF1, precoComIOF1, precoVenda1 };
}

// Lista de produtos com seus preços em dólares
const produtos1 = [
    { nome1: "Mouse", precoEmDolar1: 25 },
    { nome1: "Teclado", precoEmDolar1: 40 },
    { nome1: "Monitor", precoEmDolar1: 200 },
    { nome1: "HD Externo", precoEmDolar1: 100 },
    { nome1: "SSD", precoEmDolar1: 120 },
    { nome1: "Placa de Vídeo", precoEmDolar1: 500 },
    { nome1: "Processador", precoEmDolar1: 300 },
    { nome1: "Memória RAM", precoEmDolar1: 80 },
    { nome1: "Fonte", precoEmDolar1: 150 },
    { nome1: "Gabinete", precoEmDolar1: 70 },
];

// Cotação do dólar em reais
const taxaDeCambio1 = 5.10;

// Itera sobre cada produto, converte o preço para reais e calcula o preço de venda
produtos1.forEach(produto1 => {
    const { precoEmReais1, valorIOF1, precoComIOF1, precoVenda1 } = converterPrecoParaReais1(produto1.precoEmDolar1, taxaDeCambio1);

    // Exibe informações detalhadas do produto
    console.log(`Produto: ${produto1.nome1}`);
    console.log(`Preço em Dólares: $${produto1.precoEmDolar1.toFixed(2)}`);
    console.log(`Preço em Reais (sem IOF): R$ ${precoEmReais1.toFixed(2)}`);
    console.log(`Valor do IOF: R$ ${valorIOF1.toFixed(2)}`);
    console.log(`Preço final com IOF: R$ ${precoComIOF1.toFixed(2)}`);
    console.log(`Preço de venda (com 45% de lucro): R$ ${precoVenda1.toFixed(2)}\n`);
});
