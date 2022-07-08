# Mercado
Projeto simples desenvolvido para colocar em prática conhecimentos de MVC e padrões de arquitetura com JS.

Resolvi desenvolver esta aplicação para praticar tudo que aprendi nos cursos de MVC em JavaScript da Alura.
Além do padrão MVC, apliquei outros, como: Proxy, Promise, DataBindig, etc. 

Também utilizei novos recursos da linguagem, como: arrow functions, let, parâmetros rest, classes, async/await e private properties.

Para testar o projeto, basta abrir o index.html. Não há nescessidade de um servidor.
Mas caso queira que os produdos venham do servidor, basta abir o arquivo ```ServiceProdutos.js``` e descomentar o seguinte trecho: 
```
  // let produtos = await HttpService.get('server/api/produtosCatalogo');
  // return JSON.parse(produtos)
  // .map( produto: new Produto(produto.id, produto.caminho_imagem, produto.descricao, produto.preco));
 ```
