function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++ // dessa vez, "this" está dentro do contexto de Pessoa
        console.log(this.idade)
    }, 1000)
}

new Pessoa
// 1
// 2
// 3