$(document).ready(function() {
    $(window).bind('scroll', setTopo);

    var preco = 0.0,
        consumo = 0.0;

    $("#botao").click(function() {
        consumo = $("#consumo").val();
        preco = $("#preco").val();
        calculaValor(consumo, preco);
    });
});

function calculaValor(consumo, preco) {
    $("#hidden").show();
    var valor = parseInt(consumo / 15);
    if (consumo % 15 != 0) {
        valor += 1;
    }
    valor = valor * preco;
    valor = valor.toFixed(2);
    $("#valor").val("Valor a Pagar: R$ " + valor);
}

function setTopo() {
    $(window).scrollTop(0);
}

function voltar() {
    window.history.back();
}