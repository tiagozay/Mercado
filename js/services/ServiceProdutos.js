class ServiceProdutos
{
    static async todos_produtos_catalogo()
    {
        let produtos = await HttpService.get('server/api/produtosCatalogo');

        return JSON.parse(produtos)
        .map( produto => new Produto(produto.id, produto.caminho_imagem, produto.descricao, produto.preco));
    }
}