/* 
    Operadores em JavaScript são utilizados para criar expressões, construir e elaborar algoritmos
*/

// 1. Aritméticos

let oper1 = 2
let oper2 = 2

console.log(oper1 + oper2)
console.log(oper1 - oper2)
console.log(oper1 / oper2)
console.log(oper1 * oper2)
console.log(oper1 / oper2)
console.log(oper1 % oper2) // operador mod
console.log(oper1 ** oper2)
console.log(Math.pow(oper1, oper2))

// Quero somar 1 na variável

oper1++
opper = oper1 + 1
oper1 += 1
console.log(oper1)

// Quero subtrair 1 da variavel

oper1--
opper = oper1 - 1
oper1 -= 1
console.log(oper1)

// 2. Operadores de comparação 

let oper3 = 1

console.log(oper3 > 1)
console.log(oper3 >= 1)
console.log(oper3 < 1)
console.log(oper3 <= 1)
console.log(oper3 == 1)
console.log(oper3 != 1)

// 3. Operadores Lógicos
// AND (E) - &
// OR (OU) - ||
let cartaoValido = true
let codigoPorta = true
let entradaLiberada = cartaoValido && codigoPorta
console.log("Acesso permitido: ", entradaLiberada)

// Teste Vestibular

let passouNoVestibular = true
let passouNoEnem = true
let entrouNaFacu = passouNoVestibular || passouNoEnem
console.log("Entrou na faculdade", entrouNaFacu)
