    /*     
    Sortear um número aleatório e comparar dentro da própria função se ele é igual ao valor mencionado pelo usuário.
    */
   
    //Sortear um Número
        let tentativas = 5

        function sortear(numero1, numero2){
            while(tentativas > 0){

            // Entrada de dados
            let palpite = parseInt(numero1)
            let qtdeNumeros = parseInt(numero2)

            // TO DO: validar a entrada de dados
            
            // Validar o campo de números sorteados
            if(qtdeNumeros < 1 || qtdeNumeros > 5 || isNaN(qtdeNumeros)){
                alert("Podem ser sorteados somente de 1 à 5 números")
                return
            }

            // Validar o palpite
            if(palpite < 1 || palpite > 10 || isNaN(palpite)){
                alert("O seu palpite deve ser um número entre 1 e 10")
                return
            }

            // Criar a lista de número que serão sorteados
            let listaNumeros = []

            // ESTUDO DE CASO I - FOR substituindo While com Continue
            // Conclusão: Não é possível, pois "continue" força a saída do loop
            // Loop para adicionar elementos na lista
            /* 
            for(let contador = 0; contador < qtdeNumeros; contador++){
            
                // Sortear o número
                let numeroSorteado = parseInt(Math.random()*10+1)
                
                // Lógica utilizado pelo Professor
                // Descarta o número sorteado, caso já exista na lista
                if(listaNumeros.includes(numeroSorteado)){
                    continue
                }
                listaNumeros.push(numeroSorteado)
            */ 

            // ESTUDO DE CASO II - FOR substituindo While sem Continue
            // Conclusão: Também não funciona
            // Loop para adicionar elementos na lista
            for(let contador = 0; contador < qtdeNumeros; contador++){
            
                // Sortear o número
                let numeroSorteado = parseInt(Math.random()*10+1)
                
                // Lógica utilizado pelo Lucas (com operador Not(!))
                // Descarta o número sorteado, caso já exista na lista
                if(!listaNumeros.includes(numeroSorteado)){
                    listaNumeros.push(numeroSorteado)
                }
            }

            // Compara o valor sorteado com o valor informado pelo usuário 
            if(listaNumeros.includes(palpite)){
                mostra(`
                    <hr>
                    Você Acertou. Parabéns!
                    `)
                    
                    // Não decrementa o contador, dando assim uma tentativa
                    // a mais para o cliente
                    break

                    // Força a saída do Loop
                    //return tentativas = 0
            }else{
                mostra(`
                    <hr>
                    Você Errou! A lista de números sorteados foi ${listaNumeros}. 
                    `)
            }
            tentativas--

            // Mensagem de alerta para o usuário
            if(tentativas == 1){
                mostra(`Tente novamente, você tem apenas ${tentativas} tentativa.`)
                return
            }else if(tentativas > 0){
                mostra(`Tente novamente, você tem apenas ${tentativas} tentativas.`)
            }else{
                mostra(`Suas tentativas se esgotaram.`)
            }

            // função break do "While" faz com que ele interrompa a execução do clico desse loop
            break
            }
        }
        

    

