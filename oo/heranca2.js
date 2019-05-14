// Cadeia de protótipos (prototype chain)

Object.prototype.attr0 = 'Z' // não fazer
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: '3' }
const filho = { __proto__: pai, attr3: 'C'}

console.log(filho.attr1) // A
console.log(filho.attr0) // Z
console.log(filho.attrA) // undefined
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)
console.log(Object.keys(filho)) // [ 'attr3' ]


const carro = {
    velAtual: 0,
    velMax: 200,
    acelerar(delta) {
        if(this.velAtual + delta <= this.velMax)
            this.velAtual += delta
        else this.velAtual = velMax
    },
    status() {
        return `${this.velAtual}km/h de ${this.velMax}km/h máx`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari.status()) // 0km/h de 324km/h máx
console.log(volvo.status()) // V40: 0km/h de 200km/h máx


volvo.acelerar(100)
console.log(volvo.status()) // V40: 100km/h de 200km/h máx
