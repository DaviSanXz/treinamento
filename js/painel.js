mascaras();
function addCliente() {
    $('#frmAddCliente').on('submit', function (e) {
        e.preventDefault();

        var dados = $(this).serializeArray();
        dados.push(
            { name: "acao", value: 'addCliente' }
        );

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: 'controle.php',
            data: dados,
            beforeSend: function (retorno) {
                // aqui é a load ou alguma execução antes do envio
            }, success: function (retorno) {
                console.log(retorno);
                if (retorno == 'Gravado') {
                    $('#modalAddCliente').modal('hide');
                    listarGeral('listarCliente');
                    msgGeral()

                } else {
                    $('div#msgGeral').html("<div class='alert alert-danger text-center' role='alert'>Erro na gravação!</div>");
                }
                // aqui é o retorno de sucesso

            }
        });
    });
}

function listarCliente() {

    var dados = {
        acao: 'listarCliente'
    }

    $.ajax({
        type: 'POST',
        dataType: 'html',
        url: 'controle.php',
        data: dados,
        beforeSend: function (retorno) {
            // aqui é a load ou alguma execução antes do envio

        }, success: function (retorno) {
            // aqui é o retorno de sucesso
            $('div#showpage').html(retorno);
        }
    });

}


function listarGeral(acaopage) {

    var dados = {
        acao: acaopage
    }

    $.ajax({
        type: 'POST',
        dataType: 'html',
        url: 'controle.php',
        data: dados,
        beforeSend: function (retorno) {
            // aqui é a load ou alguma execução antes do envio

        }, success: function (retorno) {
            // aqui é o retorno de sucesso
            $('div#showpage').html(retorno);
        }
    });

}

function mascaras() {
    $('.maskCelular').inputmask({
        mask: "+99 99 9 9999-9999",
        showMaskOnHover: false
    })
    $('.maskCep').inputmask({
        mask: "99999-999"
    });

}

function msgGeral() {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Inserido com secesso!',
        showConfirmButton: false,
        timer: 1000
    })
}

function msgAtualizado() {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Atualizado com secesso!',
        showConfirmButton: false,
        timer: 1000
    })
}

function ativarGeral(e, f, idbtn, acaopage, idModal, pageretorno) {
    if (f == 'ativar') {
        var btn = idbtn;
        var ativo = 'A';
    } else {
        var btn = idbtn;
        var ativo = 'D';
    }
    $('#' + btn).on('click', function () {
        var dados = {
            acao: acaopage,
            id: e,
            a: ativo
        }

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: 'controle.php',
            data: dados,
            beforeSend: function (retorno) {
                // aqui é a load ou alguma execução antes do envio

            }, success: function (retorno) {
                // aqui é o retorno de sucesso
                if (retorno == 'Atualizado') {
                    $('#' + idModal).modal('hide');
                    msgAtualizado();
                    listarGeral(pageretorno);
                    setTimeout(function () {
                        $('div#msgGeral').html('');
                    }, 1100)

                }

                console.log(retorno);
                // $('div#showpage').html(retorno);
            }
        });
    });
}


function deleteGeralMsg(idvar, acaopage, pageretorno) {
    Swal.fire({
        title: 'Deseja Excluir este Registro?',
        text: "Você não podera desfazer essa operação!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, pode excluir!'
    }).then((result) => {
        if (result.isConfirmed) {

            var dados = {
                acao: acaopage,
                id: idvar
            }

            $.ajax({
                type: 'POST',
                dataType: 'html',
                url: 'controle.php',
                data: dados,
                beforeSend: function (retorno) {
                    // aqui é a load ou alguma execução antes do envio

                }, success: function (retorno) {
                    // aqui é o retorno de sucesso
                    listarGeral(pageretorno);
                    Swal.fire(
                        'Deletado com Sucesso!',
                        'Lista Atualizada',
                        'success'
                    )
                }
            });


        }
    })
}