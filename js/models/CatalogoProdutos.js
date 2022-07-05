class CatalogoProdutos
{
    constructor()
    {
        this._produtos = [];
    }

    adiciona_produto(produto)
    {
        if(!this.#ehProduto(produto)){
            throw new TypeError("Parâmetro incorreto! Deve ser do tipo Produto");
        }

        this._produtos.push(produto);
    }

    produto_com_id(id)
    {
        return this._produtos.find( produto => produto.id == id );
    }

    #ehProduto(produto)
    {
        return produto instanceof Produto;
    }

    get produtos()
    {
        //Programação defensiva
        return [].concat(this._produtos);
    }


}