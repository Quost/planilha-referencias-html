$(document).ready(function() {
    $(window).bind('scroll', setTopo);

    var produto = '',
        preco = 0;

    $("#botao").click(function() {
        produto = $("#produto").val();
        preco = $("#preco").val();
        calculaPromocao(produto, preco);
    });
});

function calculaPromocao(produto, preco) {
    $("#hidden").show();
    var produto3 = (preco / 2);
    var total = (2 * preco) + produto3;
    total = total.toFixed(2);
    produto3 = produto3.toFixed(2);
    $("#promocao").val(produto + " - Promoção: Leve 3 por: R$ " + total);
    $("#3produto").val("O 3º produto custa apenas: R$ " + produto3);
}

function setTopo() {
    $(window).scrollTop(0);
}

function voltar() {
    window.history.back();
}