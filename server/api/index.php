<?php

    $caminho = $_SERVER['REQUEST_URI'];

    $caminho_dividido = explode('/' , $caminho);

    switch ($caminho_dividido[3]){
        case 'produtosCatalogo': 
            require_once 'produtosCatalogo.php';
            break;
        case 'cadastraProduto': 
            require_once 'cadastraProduto.php';
            break;
        default: 
            header('HTTP/1.1 404 Not Found');
            echo "Serviço não encontrado!";
    }
    
?>