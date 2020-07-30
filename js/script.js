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

$(function() {
    var saveComment = function(data) {

        // Convert pings to human readable format
        $(Object.keys(data.pings)).each(function(index, userId) {
            var fullname = data.pings[userId];
            var pingText = '@' + fullname;
            data.content = data.content.replace(new RegExp('@' + userId, 'g'), pingText);
        });

        return data;
    }
    $('#comments-container').comments({
        profilePictureURL: 'https://viima-app.s3.amazonaws.com/media/public/defaults/user-icon.png',
        currentUserId: 1,
        roundProfilePictures: true,
        textareaRows: 1,
        enableAttachments: true,
        enableHashtags: true,
        enablePinging: true,
        scrollContainer: $(window),
        searchUsers: function(term, success, error) {
            setTimeout(function() {
                success(usersArray.filter(function(user) {
                    var containsSearchTerm = user.fullname.toLowerCase().indexOf(term.toLowerCase()) != -1;
                    var isNotSelf = user.id != 1;
                    return containsSearchTerm && isNotSelf;
                }));
            }, 500);
        },
        getComments: function(success, error) {
            setTimeout(function() {
                success(commentsArray);
            }, 500);
        },
        postComment: function(data, success, error) {
            setTimeout(function() {
                success(saveComment(data));
            }, 500);
        },
        putComment: function(data, success, error) {
            setTimeout(function() {
                success(saveComment(data));
            }, 500);
        },
        deleteComment: function(data, success, error) {
            setTimeout(function() {
                success();
            }, 500);
        },
        upvoteComment: function(data, success, error) {
            setTimeout(function() {
                success(data);
            }, 500);
        },
        validateAttachments: function(attachments, callback) {
            setTimeout(function() {
                callback(attachments);
            }, 500);
        },
    });
});