function addCliente() {
    $('#frmAddCliente').on('submit', function(e) {
        e.preventDefault();

        var dados = {
            acao: '22'
        }

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: 'controle.php',
            data: dados,
            beforeSend: function (retorno) {
                // aqui é a load ou alguma execução antes do envio
            }, success: function (retorno) {
                console.log(retorno);
                // aqui é o retorno de sucesso

            }
        });
    });
}