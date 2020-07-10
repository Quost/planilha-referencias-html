$(document).ready(function() {
    $(window).bind('scroll', setTopo);

    var preco = 0.0,
        veiculo = '';

    $("#botao").click(function() {
        veiculo = $("#veiculo").val();
        preco = $("#preco").val();
        calculaParcelas(veiculo, preco);
    });
});

function calculaParcelas(veiculo, preco) {
    $("#hidden").show();
    var entrada = preco / 2;
    var parcela = (preco - entrada) / 12;
    entrada = entrada.toFixed(2);
    parcela = parcela.toFixed(2);
    $("#veic").val("Promoção: " + veiculo);
    $("#entrada").val("Entrada de: R$ " + entrada);
    $("#parcelas").val("+ 12x de: R$ " + parcela);
}

function setTopo() {
    $(window).scrollTop(0);
}

function voltar() {
    window.history.back();
}