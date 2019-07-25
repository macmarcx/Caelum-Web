/* 
    Em programação, quando temos uma lista de variáveis que são relacionados entre si,
    chamamos essa lista de array
*/

// Lista de compras
let listaDeCompras = ["ovos", "pão", "queijo"]
console.log(listaDeCompras)

// Criar uma lista vazia    
let novaListaDeCompras = []

// Pegar o 1º elemento
console.log(listaDeCompras[0])

// Para consultar toda a lista
// Tenho que saber o tamanho
let tamanho = listaDeCompras.length
let contador = 0

while(contador <= tamanho){
    console.log("Item " + contador + " da lista é: " + listaDeCompras[contador])
    contador++
}

// Como adicionar um elemento na lista
listaDeCompras.push("chocolate")
console.log(listaDeCompras)

// Atualizar um elemento da lista
listaDeCompras[1] = "Sorvete"
console.log(listaDeCompras)

// Pesquisar um elemento na lista
if(listaDeCompras.includes("aveia")){
    console.log("Item faz parte da lista")
}else{
    console.log("Tem certeza que é o item correto?")
}