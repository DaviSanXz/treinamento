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
                    $('div#msgGeral').html("<div class='alert alert-success text-center' role='alert'>Gravado com sucesso!</div>");
                    alert('Gravado com sucesso!!!')
                }
                // aqui é o retorno de sucesso

            }
        });
    });
}