<?php
$acao = filter_input(INPUT_POST,'acao', FILTER_SANITIZE_STRING);
switch ($acao) {
    case 'addCliente':
        include_once './cliente/addCliente.php';
        break;
    case 'listarCliente':
        include_once './cliente/listarCliente.php';
        break;
    case 'ativarCliente':
        include_once './cliente/ativarCliente.php';
        break;
    case 'excluirCliente':
        include_once './cliente/excluirCliente.php';
        break;
}
