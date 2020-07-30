import commentBox from 'commentbox.io'; // also available on CDN
commentBox('5642498839937024-proj');

// Verifica se o documento está pronto

$(document).ready(function() {

    // Para cada tabela, existe um input, o qual será utilizado para
    // realizar procuras pela tabela... Utilizando o evento "on keyup"
    // ele transforma primeiramente tudo em letras minúsculas, para uma
    // comparação utilizando a função "filter"

    $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $("#myInput2").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable2 tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $("#myInput3").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable3 tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $("#myInput4").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable4 tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $("#myInput5").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable5 tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $("#myInput6").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable6 tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $("#myInput7").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable7 tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $("#myInput8").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable8 tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $("#myInput9").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable9 tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $("#myInput10").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable10 tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $("#myInput11").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable11 tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $("#myInput12").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable12 tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

// Troca a lâmpada para ligado - altera src da imagem para o da lampada ligada
function lampadaLigada() {

}

// Troca a lâmpada para desligado - altera src da imagem para o da lampada desligada
function lampadaDesligada() {

}

$(function() {
    var str = '#len'; //increment by 1 up to 1-nelemnts
    $(document).ready(function() {
        var i, stop;
        i = 1;
        stop = 4; //num elements
        setInterval(function() {
            if (i > stop) {
                return;
            }
            $('#len' + (i++)).toggleClass('bounce');
        }, 500)
    });
});