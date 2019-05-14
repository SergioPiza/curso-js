let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'teste'


console.log(a) // 3
console.log(global.a) // undefined
console.log(global.b) // 123
console.log(this.a) // undefined
console.log(this.b) // undefined
console.log(this.c) // 456
console.log(module.exports.c) // 456
console.log(module.exports === this) // true
console.log(global == this) // false
console.log(module.exports) // { c: 456, d: false, e: 'teste' }

// criando variavel sem declaracao (var/let/const)
abc = 3
console.log(global.abc)