class ProdutoComprado extends Produto
{
    #valor_total;
    #quantidade;

    constructor(id, caminho_imagem, descricao, preco, quantidade)
    {
        super(id, caminho_imagem, descricao, preco);
        this.#quantidade = quantidade,
        this.#valor_total = this.#calcula_valor_total();
    }


    #calcula_valor_total()
    {
        return this.preco * this.#quantidade;
    }

    #atualiza_valor_total()
    {
        this.#valor_total = this.#calcula_valor_total();
    }

    aumenta_quantidade(quantidade)
    {
        this.#quantidade += quantidade;
        this.#atualiza_valor_total();


    }

    diminui_quantidade(quantidade)
    {
        if(this.#quantidade == 1){
            return;
        }
        this.#quantidade -= quantidade;
        this.#atualiza_valor_total();
    }

    
    altera_quantidade(nova_quantidade)
    {
        if(nova_quantidade < 1){
            return;
        }

        this.#quantidade = Number(nova_quantidade);

        this.#atualiza_valor_total();

    }

    get quantidade()
    {
        return this.#quantidade;
    }

    get valor_total()
    {
        return this.#valor_total;
    }

    get valor_total_formatado()
    {
        return `R$ ${this.#valor_total.toFixed(2)}`;
    }

}