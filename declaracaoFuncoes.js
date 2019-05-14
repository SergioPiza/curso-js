//padrao
function f1() {} 

//armazenar em variavel
const f2 = function() {}

//armazenar em array
const array = [function(a, b) {return a+b}, f1, f2]
console.log(array[0](2, 3)) //5

const obj = {}

//passando como parametro
function f3(f4) {
    f4()
}
f3(function() { console.log("teste...") }) //teste...

//função retornarndo função
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}
soma(2, 3)(4) // 9
const cincoMais = soma(2, 3)
cincoMais(10) //15