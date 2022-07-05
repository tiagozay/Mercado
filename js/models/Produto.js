class Produto
{   
    #id;
    #preco;

    constructor(id, caminho_imagem, descricao, preco)
    {
        this.#id = id;
        this.caminho_imagem = caminho_imagem;
        this.descricao = descricao;
        this.#preco = preco;
    }

    get id()
    {
        return this.#id;
    }

    get preco()
    {
        return this.#preco;
    }

    get preco_formatado()
    {
        return `R$ ${this.#preco.toFixed(2)}`;
    }

    set preco(preco)
    {
        return this.#preco = preco;
    }
}