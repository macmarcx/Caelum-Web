/* 
    Assim como as demais opções de loop,
    como while, o loop com For executa
    uma ação um determinado número de vezes

    Porém, ao contrário do while, a criação
    do contador e o incremento fazem parte 
    da estrutura do comando
*/

// Loop 
/* for(let contador = 0; contador < 6; contador++){
    console.log("Hello World")
}
 */

// Neste caso, obviamente o for é melhor

// Exercício
// Dado o loop a seguir com while
// criar um semelhante com For

console.log("Loop com while")

contador = 0 

while(contador <= 20){
    if(contador % 2 != 0)
    {
        console.log(contador)
    }
    contador++
}

// Loop acima com For
console.log("Loop com For")

for (let contador = 0; contador <= 20; contador++) {
    if(contador % 2 != 0){
        console.log(contador)
    }
    
}