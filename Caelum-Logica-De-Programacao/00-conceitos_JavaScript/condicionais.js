/* 
    Condicionais avaliam se determinadas condições são verdadeiras ou falsas
*/

/* 
    Problema:
    Verificar se um aluno foi aprovado
    A condição para aprovação é a seguinte:
    - Média maior ou igual a 6.0, considerando duas notas de prova, e
    - Número de faltas não pode ser maior que 25
*/

let nota1 = 3
let nota2 = 3
let media = (nota1 + nota2) / 2 
let faltas = 3

if (media >= 6.0 && faltas <= 25) {
    console.log("Aluno Aprovado!")
}else if (media < 6 && faltas > 25){
    console.log("Reprovado por notas e faltas")
}
else if(media < 6){
    console.log("Reprovado por nota media igua a " + media)
} else{
    console.log("Reprovado por " + faltas + " faltas")
}

