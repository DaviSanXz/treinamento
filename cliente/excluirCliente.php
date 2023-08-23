<?php
include_once './config/constantes.php';
include_once './config/conexao.php';
include_once './func/dashboard.php';

$dados = filter_input_array(INPUT_POST, FILTER_DEFAULT);


if (!empty($dados) && isset($dados)) {
    $idCliente = $dados['id'];

    $retorno = deleteRegistro('cliente', 'idCliente', "$idCliente");
}else{
    $retorno = 'nDeletado';
}
