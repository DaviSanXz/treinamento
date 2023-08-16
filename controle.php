<?php
$acao = filter_input(INPUT_POST,'acao', FILTER_SANITIZE_STRING);
echo $acao;
