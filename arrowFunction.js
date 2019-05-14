// metodo padrao
let dobro = function(a) {
    return 2 * a
}

// arrow 1
dobro = (a) => {
    return 2 * a
}

// arrow 2
dobro = a => 2 * a

console.log(dobro(Math.PI))

//----

let ola = function() {
    return "Olá"
}

ola = () => "Olá"
ola = _ => "Olá" //possui um param!

console.log(ola())