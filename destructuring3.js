function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

console.log(rand({max: 10, min: 100})) //entre 10 e 100

const obj = {max: 50, min: 40} //entre 40 e 50
console.log(rand(obj));
console.log(rand({min: 955})) // entre 955 e 1000
console.log(rand({}))