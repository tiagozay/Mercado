<?php

    $produtos = [
        [
            'id' => 1, 
            'caminho_imagem' => 'assets/images/7246_full.png', 
            'descricao' => 'Detergente limpol 500ml',  
            'preco' => 1.79
        ],
        [
            'id' => 2, 
            'caminho_imagem' => 'assets/images/cafe_melita.png',
            'descricao' =>  'Cafe melitta 500g tradicional',
            'preco' => 17.99
        ],
        [
            'id' => 3, 
            'caminho_imagem' => 'assets/images/feijao.png', 
            'descricao' => 'Feijao Caldo Bom 1kg Preto',
            'preco' => 6.29
        ],
        [
            'id' => 4, 
            'caminho_imagem' => 'assets/images/waffer.png', 
            'descricao' => 'Wafer Nestle 110g Sensação',
            'preco' => 2.59
        ],
        [
            'id' => 5, 
            'caminho_imagem' => 'assets/images/sabonete.png ', 
            'descricao' => 'Sabonete Lux 85g Botanicals lavanda ',
            'preco' => 2.39
        ],
        [
            'id' => 6, 
            'caminho_imagem' => 'assets/images/refri_sprite.png ', 
            'descricao' => 'Refri Sprite 2l Original Limão ',
            'preco' => 7.34
        ],
        [
            'id' => 7, 
            'caminho_imagem' => 'assets/images/adocante.png ', 
            'descricao' => 'Adocante Uniao 500g Light ',
            'preco' => 5.29
        ],
        [
            'id' => 8, 
            'caminho_imagem' => 'assets/images/13362_full.png ', 
            'descricao' => 'Refri Uliana 600ml Framboesa ',
            'preco' => 1.99
        ],
        [
            'id' => 9, 
            'caminho_imagem' => 'assets/images/chocolate.png ', 
            'descricao' => 'Chocolate Hershey\'s 85g Special Dark Cranberry ',
            'preco' => 5.99 
        ],
        [
            'id' => 10, 
            'caminho_imagem' => 'assets/images/cafe.png', 
            'descricao' => 'Cafe Melitta 500g Extra Forte ',
            'preco' =>  17.99
        ],
        [
            'id' => 11, 
            'caminho_imagem' => 'assets/images/acucar.png', 
            'descricao' => 'Acucar Uniao 1kg Demerara ',
            'preco' =>  4.49
        ],
        [
            'id' => 12, 
            'caminho_imagem' => 'assets/images/suco.png ', 
            'descricao' => 'Refresco Tang 25g Manga ',
            'preco' => 1.27 
        ],
    ];

    header('HTTP/1.1 200 OK');

    echo json_encode($produtos);

    exit();

    // [
    //     'id' => , 
    //     'caminho_imagem' => ' ', 
    //     'descricao' => ' ',
    //     'preco' => 
    // ],
?>
