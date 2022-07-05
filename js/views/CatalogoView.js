class CatalogoView
{
    #elemento;

    constructor(elemento)
    {
        this.#elemento = elemento;
    }

    #template(model)
    {
        return  `
            ${model.produtos.map( produto => {
                return `
                    <article class="card_produto">
                        <img src="${produto.caminho_imagem}" class="card_produto__img">
                        <p class="card_produto__preco">${produto.preco_formatado}</p> 
                        <p class="card_produto__descricao">${produto.descricao}</p>
                        <button class="card_produto__btnComprar" onclick="produtoController.comprar_produto('${produto.id}')">
                            <span class="material-icons"> add_shopping_cart </span>
                            Comprar
                        </button>
                    </article>
                `
            } ).join('') }
        `
        
        
    }

    update(model)
    {
        this.#elemento.innerHTML = this.#template(model);
    }

}