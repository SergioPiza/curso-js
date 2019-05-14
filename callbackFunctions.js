const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

/*
 * 1. Mercedes
 * 2. Audi
 * 3. BMW
 */
fabricantes.forEach(imprimir)

/*
 * Mercedes
 * Audi
 * BMW
 */
fabricantes.forEach(function(fabricante) {
    console.log(fabricante)
})

fabricantes.forEach(fabricante => console.log(fabricante))