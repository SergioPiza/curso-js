console.log(typeof String) // function
console.log(typeof Array) // function
console.log(typeof Object) // function

// toda function tem um prototype

String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

console.log("USP ICMC".reverse()) // CMCI PSU


Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first()) // 1
console.log(['a', 'b', 'c'].first()) // a

String.prototype.toString = function() {
    return 'Não sobrescreva funções já existentes'
}

console.log('USP ICMC'.reverse()) // setnetsixe áj seõçnuf avercserbos oãN

