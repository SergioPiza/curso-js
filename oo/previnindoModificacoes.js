//Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível: ', Object.isExtensible(produto)) // true

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto) // { nome: 'Borracha', preco: 1.99 } // tag foi excluída!


// Object.seal
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa)) // true

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa) // { nome: 'Juliana', idade: 29 } // nome nao foi excluído


// Object.freeze = selado + valores constantes