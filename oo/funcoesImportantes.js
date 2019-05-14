const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // [ 'nome', 'idade', 'peso' ]
console.log(Object.values(pessoa)) // [ 'Rebeca', 2, 13 ]
console.log(Object.entries(pessoa)) // [ [ 'nome', 'Rebeca' ], [ 'idade', 2 ], [ 'peso', 13 ] ]

Object.entries(pessoa).forEach(e => {
    /**
     * nome: Rebeca
     * idade: 2
     * peso: 13
     */
    console.log(`${e[0]}: ${e[1]}`)
})


Object.entries(pessoa).forEach(([chave, valor]) => {
    /**
     * nome: Rebeca
     * idade: 2
     * peso: 13
     */
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/02/2003'
console.log(pessoa.dataNascimento) // 01/01/2019
                                   // writable: false

console.log(Object.keys(pessoa)) // [ 'nome', 'idade', 'peso', 'dataNascimento' ]

const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c:3, a:4 }
const obj = Object.assign(dest, o1, o2)

console.log(obj) // { a: 4, b: 2, c: 3 }