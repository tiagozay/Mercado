class ProdutoController
{
    #catalogo;
    #catalogoView;

    #cesta;
    #cestaView;

    constructor()
    {   
        let $ = document.querySelector.bind(document);

        this.#catalogoView = new CatalogoView($("#grid_produtos"));
        this.#catalogo = new Bind(new CatalogoProdutos(), this.#catalogoView, 'adiciona_produto');

        this.#cestaView = new CestaView($("#cesta"));
        this.#cesta = new Bind(new Cesta(), this.#cestaView, 'adiciona_produto', 'remove_produto', 'aumenta_quantidade_de_um_produto', 'diminui_quantidade_de_um_produto', 'altera_quantidade_produto', 'esvazia_cesta');

    }


    gerar_catalogo()
    {

        ServiceProdutos.todos_produtos_catalogo()
        .then( produtos => produtos.forEach( produto => this.#catalogo.adiciona_produto(produto) ) )
        .catch( value => console.log(value) );

    }

    comprar_produto(id)
    {
        let produto_comprado = this.#recebe_id_e_transforma_produto_em_produto_comprado(id);

        this.#cesta.adiciona_produto(produto_comprado);
    }

    aumentar_quantidade(id)
    {
        let produto_comprado = this.#recebe_id_e_transforma_produto_em_produto_comprado(id);

        this.#cesta.aumenta_quantidade_de_um_produto(produto_comprado);
    }

    diminuir_quantidade(id)
    {
        let produto_comprado = this.#recebe_id_e_transforma_produto_em_produto_comprado(id);

        this.#cesta.diminui_quantidade_de_um_produto(produto_comprado);
    }

    alterar_quantidade_de_um_produto(id)
    {
    
        let quantidade_digitada = event.target.value;

        let produto_comprado = this.#recebe_id_e_transforma_produto_em_produto_comprado(id);

        this.#cesta.altera_quantidade_produto(produto_comprado, quantidade_digitada);

    }

    remover_produto(id)
    {

        let confirmacao = confirm("Remover item da cesta?");
        if(!confirmacao){
            return;
        }

        let produto_comprado = this.#recebe_id_e_transforma_produto_em_produto_comprado(id);
        
        this.#cesta.remove_produto(produto_comprado);

    }

    finalizar_compra()
    {
        if(this.#cesta._produtos.length == 0){
            alert("Você ainda não tem produtos na cesta!");
            return;
        }

        this.#cesta.esvazia_cesta();  
        alert("Obrigado para comprar conosco! Volte sempre.")
    }

    #recebe_id_e_transforma_produto_em_produto_comprado(id)
    {
        let produto = this.#catalogo.produto_com_id(id);

        return new ProdutoComprado(
            produto.id, 
            produto.caminho_imagem,
            produto.descricao, 
            produto.preco, 
            1
        );
    }
}