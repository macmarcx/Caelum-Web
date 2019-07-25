/* 
    Executar um ciclo de repetições enquanto uma determinada condição for verdadeira
*/

// 1. While
    console.log("1º Formato de While")
    let contador = 0
    while(contador <= 20){
        if(contador % 2 != 0){
            console.log(contador)
        }
        contador ++
    }

// 2. Do While
    console.log("2º Formato de While")
    contador = 0
    do {
        if(contador % 2 != 0){
            console.log(contador)
        }
        contador++

    }while(contador <= 20)