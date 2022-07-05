<?php

    $caminho_imagem = $_POST['caminho_imagem'];
    $descricao = $_POST['descricao'];
    $preco = $_POST['preco'];

    header('HTTP/1.1 200 OK');

    echo "Produto $caminho_imagem, $descricao, $preco cadastrado com sucesso!";

?>