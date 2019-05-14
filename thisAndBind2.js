function _pessoa() {
    this.idade = 0

    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }, 1000)
}
//new _pessoa
// NaN
// NaN
// ...

function Pessoa() {
    this.idade = 0

    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}

//new Pessoa
// 1
// 2
// 3
// ...

// ---------

function Pessoa2() {
    this.idade = 0
    
    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }, 1000)
}

new Pessoa2
// 1
// 2
// 3
// ...