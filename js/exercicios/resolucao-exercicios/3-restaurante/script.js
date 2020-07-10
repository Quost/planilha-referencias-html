$(document).ready(function() {
    $(window).bind('scroll', setTopo);

    var preco = 0.0,
        consumo = 0.0;

    $("#botao").click(function() {
        consumo = $("#consumo").val();
        preco = $("#preco").val();
        calculaRefeicao(consumo, preco);
    });
});

function calculaRefeicao(consumo, preco) {
    $("#hidden").show();
    var valor = consumo * preco / 1000;
    valor = valor.toFixed(2);
    $("#valor").val("Valor a pagar: R$ " + valor);
}

function setTopo() {
    $(window).scrollTop(0);
}

function voltar() {
    window.history.back();
}