
let endpoint = "https://raw.githubusercontent.com/guilhermeonrails/api-frontend/main/produtos.json"

produtos = []
let elementoParaInserirProduto = document.getElementById("produtos__lista")
buscarProdutos()


async function buscarProdutos(){
    let res =  await fetch(endpoint)
    produtos =await res.json()
    exibirProdutosNaTela(produtos) 
}

function exibirProdutosNaTela(produtos) {
    produtos.forEach(produto => {
        elementoParaInserirProduto.innerHTML +=`
                <li class="produtos__item">
                    <div class="produtos__content">
                        <img src="${produto.img}" alt=${produto.descricao}>
                        <div class="produtos__informacoes">
                            <h3>${produto.nome}</h3>
                            <p> ${produto.descricao}
                            </p>
                            <h4>R$ ${produto.valorComDesconto}<s>R$ ${produto.valorSemDesconto}</s></h4>
                            <p>${produto.tipoEntrega}</p>
                        </div>
                    </div>
                </li>`

    });
}