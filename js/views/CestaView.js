class CestaView
{
    #elemento;

    constructor(elemento)
    {
        this.#elemento = elemento;
    }

    #template(model)
    {
        if(model.produtos.length == 0){
            return  `

            <ul id="cesta__produtos">
                <p id="mensagem_cesta_vazia">Cesta vazia! <i class="material-icons">shopping_basket</i></p>
            </ul>

            <div id="cesta__informacoes_finais">

                <label>Itens:</label>
                <span id="cesta__informacoes_finais__qtde_itens">0</span> 
        
                <label>Valor total:</label>
                <span id="cesta__informacoes_finais__valor_total">0.00</span> 

            </div>
        
            `
        }

        return  `

            <ul id="cesta__produtos">
                ${model.produtos.map( produto => {
                    return `
                        <li class="cesta__produto">
                            <img src="${produto.caminho_imagem}" class="cesta__produto__img">
                            <p class="cesta__produto__descricao">${produto.descricao}</p>

                            <div class="cesta__produto__quantidade">
                                <button class="material-icons" onclick='produtoController.diminuir_quantidade(${produto.id})'>remove</button>
                                <input type="text" class="cesta__produto__quantidade__input" value="${produto.quantidade}" onblur="produtoController.alterar_quantidade_de_um_produto(${produto.id})">
                                <button class="material-icons" onclick='produtoController.aumentar_quantidade(${produto.id})'>add</button>
                            </div>

                            <p class="cesta__produto__vlTotal">${produto.valor_total_formatado}</p>

                            <button class="material-icons cesta__produto__btn_cancelar_produto" onclick='produtoController.remover_produto(${produto.id})'>cancel</button>
                            <!-- <button class="material-symbols-outlined cesta__produto__btn_cancelar_produto">cancel</button> -->

                    
                        </li>
                    `
                } ).join('') }
            </ul>

            <div id="cesta__informacoes_finais">

                <label>Itens:</label>
                <span id="cesta__informacoes_finais__qtde_itens">${model.qtde_produtos}</span> 
        
                <label>Valor total:</label>
                <span id="cesta__informacoes_finais__valor_total">${model.valor_total_formatado}</span> 

            </div>

            <button id="btn_finalizar_compra" onclick='produtoController.finalizar_compra()'>Finalizar compra <i class="material-icons">shopping_cart</i> </button>
        
        `
        
    }

    update(model)
    {
        this.#elemento.innerHTML = this.#template(model);
    }

}