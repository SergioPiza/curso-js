const obj = {a: 1, b: 2, c: 3, soma() { return a + b + c }}
console.log(JSON.stringify(obj)) // {"a":1,"b":2,"c":3}
                                 // funcao soma() excluída

// console.log(JSON.parse('{a:1,b:2,c:3}'))       // da erro (chaves sem aspas)
// console.log(JSON.parse("{'a':1,'b':2,'c':3}")) // da erro (chaves com aspas simples)

console.log(JSON.parse('{"a":1,"b":2,"c":3}')) // { a: 1, b: 2, c: 3 }