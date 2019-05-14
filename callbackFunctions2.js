const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.2, 9.0]

// Sem callback
let notasBaixas = []
for(let i in notas) {
    if(notas[i] < 7)
        notasBaixas.push(notas[i])
}

console.log(notasBaixas)

// Com callback
notasBaixas = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas)

notasBaixas = notas.filter(nota => nota < 9)
console.log(notasBaixas)

const notasMenoresQue7 = nota => nota < 7
notasBaixas = notas.filter(notasMenoresQue7)
console.log(notasBaixas)