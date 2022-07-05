class Cesta
{
    #qtde_produtos;
    #valor_total;

    constructor()
    {
        this._produtos = [];
        this.#qtde_produtos = 0;
        this.#valor_total = 0;
    }

    adiciona_produto(produto)
    {
        if(!this.#ehProduto(produto)){
            throw new TypeError("Parâmetro incorreto! Deve ser do tipo Produto");
        }

        let produto_passado = this.#buscaProdutoPassado(produto);
        if(produto_passado){
            produto_passado.aumenta_quantidade(1);
            this.#calcula_valor_total();
            this.#calcula_qtde_itens();
            return;
        }

        this._produtos.push(produto);

        this.#calcula_valor_total();
        this.#calcula_qtde_itens();
        
    }

    aumenta_quantidade_de_um_produto(produto)
    {
        let produto_buscado = this.#buscaProdutoPassado(produto);

        produto_buscado.aumenta_quantidade(1);

        this.#calcula_valor_total();
        this.#calcula_qtde_itens();
    }

    diminui_quantidade_de_um_produto(produto)
    {
        let produto_buscado = this.#buscaProdutoPassado(produto);

        produto_buscado.diminui_quantidade(1);

        this.#calcula_valor_total();
        this.#calcula_qtde_itens();
    }

    altera_quantidade_produto(produto, nova_quantidade)
    {

        produto = this.#buscaProdutoPassado(produto);

        produto.altera_quantidade(nova_quantidade);

        this.#calcula_valor_total();
        this.#calcula_qtde_itens();

    }

    remove_produto(produto)
    {

        produto = this.#buscaProdutoPassado(produto);

        let indice = this._produtos.indexOf(produto);

        this._produtos.splice(indice, 1);

        this.#calcula_valor_total();
        this.#calcula_qtde_itens();

    }

    esvazia_cesta()
    {
        this._produtos = [];
        this.#calcula_qtde_itens();
        this.#calcula_valor_total();
    }

    #calcula_valor_total()
    {
        this.#valor_total = this._produtos.reduce( (acumulador, produto) => produto.valor_total + acumulador , 0 );
    }

    #calcula_qtde_itens()
    {
        this.#qtde_produtos = this._produtos.reduce( (acumulador, produto) => produto.quantidade + acumulador , 0 );
    }

    #buscaProdutoPassado(produto_buscado)
    {
        return this._produtos.find( produto => produto.id == produto_buscado.id );
    }

    #ehProduto(produto)
    {
        return produto instanceof Produto;
    }

    get produtos()
    {
        return this._produtos;
    }

    get qtde_produtos()
    {
        return this.#qtde_produtos;
    }

    get valor_total()
    {
        return this.#valor_total;
    }

    get valor_total_formatado()
    {
        return this.#valor_total.toFixed(2);
    }


}