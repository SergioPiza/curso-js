const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: "rua abc",
        numero: 1000
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, test = true} = pessoa
console.log(sobrenome, test)

const { endereco: {logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)
