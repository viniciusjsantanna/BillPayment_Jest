const pagamento = require('../modules/pagamento');

describe('Aplicar multa de juros no valor do boleto caso seja pago após o vencimento', () => {

    test('Valor aplicado com 1 dia de atraso', () => {
        expect(pagamento.ReceberValorBoleto(10, 5, 6)).toBe(11.5);
    });

    test('Valor aplicado com 5 dia de atraso', () => {
        expect(pagamento.ReceberValorBoleto(10, 5, 10)).toBe(17.5);
    });

    test('Valor aplicado com nenhum dia de atraso', () => {
        expect(pagamento.ReceberValorBoleto(10, 5, 4)).toBe(10);
    });

    test('Dia do Pagamento passado negativo', () => {
        expect(pagamento.ReceberValorBoleto(10, 5, -4)).toBe("Dia do Pagamento deve ser um número positivo");
    });

    test('Dia de Vencimento passado negativo', () => {
        expect(pagamento.ReceberValorBoleto(10, -5, 4)).toBe("Dia de Vencimento deve ser um número positivo");
    });
    
    test('Valor a ser pago negativo', () => {
        expect(pagamento.ReceberValorBoleto(-10, 5, 4)).toBe("O valor do boleto deve ser positivo");
    });
    
});