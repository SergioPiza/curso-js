function soma() {
    let soma = 0
    for(i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma()) //0
console.log(soma(2, 2, 2, 2)) //8
console.log(soma(2.1, 2.2, 2.3, 2.4))// 9
console.log(soma(1.2, 2.3, "teste")) //3.5teste
console.log(soma("a", "b", "c")) //0abc