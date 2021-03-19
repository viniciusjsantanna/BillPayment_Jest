function ReceberValorBoleto(valorParcela, diaVencimento, diaPagamento) {
    var messageError = validarPagamentoBoleto(valorParcela, diaVencimento, diaPagamento);

    if(messageError != undefined){
        return messageError;
    }

    return calcularValorJurosPagamento(valorParcela, diaVencimento, diaPagamento);
}

function validarPagamentoBoleto(valorParcela, diaVencimento, diaPagamento) {
    if (valorParcela < 0) {
        return "O valor do boleto deve ser positivo";
    }
    else if (diaPagamento < 0) {
        return "Dia do Pagamento deve ser um número positivo";
    }
    else if (diaVencimento < 0) {
        return "Dia de Vencimento deve ser um número positivo"
    }
    return undefined;
}

function calcularValorJurosPagamento(valorParcela, diaVencimento, diaPagamento){
    var diffDias = 0;
    if (diaVencimento < diaPagamento) {
        diffDias = diaPagamento - diaVencimento;
    }
    
    var juros = diffDias * 1.50;
    return valorParcela + juros;
}

module.exports.ReceberValorBoleto = ReceberValorBoleto;