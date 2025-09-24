/**
 * Exemplo de código do professor Eduardo Popovici
 * Aula de lógica de programação com TypeScript
 * 
 * Este código demonstra o uso de variáveis, tipos, estrutura switch e controle de fluxo.
 */

// Declaração de uma variável chamada "mes" do tipo number e atribuição do valor 4
let mes: number = 4;

/**
 * Estrutura switch para verificar o valor da variável "mes"
 * e exibir o nome correspondente do mês.
 * 
 * O switch compara o valor da variável com cada "case" e executa o bloco correspondente.
 */
switch (mes) {
    case 1: // Se "mes" for igual a 1
        console.log("Janeiro"); // Exibe "Janeiro" no console
        break; // Interrompe a execução do switch para não executar os próximos cases
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril"); // Como mes = 4, esta linha será executada
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;
    default: // Executado se nenhum dos cases acima corresponder ao valor de "mes"
        console.log("Mês inválido"); // Exibe "Mês inválido" se mes não estiver entre 1 e 12
}
