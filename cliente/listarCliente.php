<?php
include_once './config/constantes.php';
include_once './config/conexao.php';
include_once './func/dashboard.php';

$retornoListaCliente = listarGeral('idcliente, nome, telefone, ativo', 'cliente');
if ($retornoListaCliente != 'vazio') {

?>
    <table class="table table-hover">
        <thead>
            <tr class="bg-primary text-white">
                <th scope="col" width="7%"><i class="fa-solid fa-hashtag fa-beat-fade"></i></i> cod:</th>
                <th scope="col" width="55%"><i class="fa-solid fa-user"></i> Nome:</th>
                <th scope="col" width="26%"><i class="fa-solid fa-phone"></i> Telefone:</th>
                <th scope="col" width="12%"><i class="fa-solid fa-bars"></i> Ação:</th>
            </tr>
        </thead>
        <tbody>
            <?php

            foreach ($retornoListaCliente as $itemListaCliente) {
                $idcliente = $itemListaCliente->idcliente;
                $nome = $itemListaCliente->nome;
                $telefone = $itemListaCliente->telefone;
                $ativo = $itemListaCliente->ativo;



            ?>
                <tr>
                    <th scope="row"><?php echo $idcliente; ?></th>
                    <td><?php echo $nome; ?></td>
                    <td><?php echo $telefone; ?></td>
                    <td>
                        <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#modalAtivarCliente"><span class="mdi mdi-lock-open-check"></span> Ativar</button>
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalAltCliente"> <span class="mdi mdi-account-edit"></span> Alterar</button>
                            <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#modalExcCliente"><span class="mdi mdi-trash-can"></span> Excluir</i></button>
                        </div>
                    </td>
                </tr>
            <?php
            }
            ?>
        </tbody>
    </table>

<?php
}
?>