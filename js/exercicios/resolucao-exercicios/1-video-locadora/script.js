$(document).ready(function() {
    $(window).bind('scroll', setTopo);

    var duracao = 0,
        titulo = '';

    $("#botao").click(function() {
        duracao = $("#duracao").val();
        titulo = $("#titulo").val();
        converteEmHoras(titulo, duracao);
    });
});

function converteEmHoras(titulo, duracao) {
    $("#hidden").show();
    var hora = parseInt(duracao / 60);
    var minutos = (duracao % 60);
    $("#tit").val(titulo);
    $("#duracaoHM").val(hora + " hora(s) e " + minutos + " minutos(s)");
}

function setTopo() {
    $(window).scrollTop(0);
}

function voltar() {
    window.history.back();
}