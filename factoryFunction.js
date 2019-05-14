function criarProduto(nome, preco) {
    // return {
    //     nome: nome,
    //     preco: preco,
    //     desconto: 0.1
    // }
    
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.49))
// { nome: 'Notebook', preco: 2199.49, desconto: 0.1 }