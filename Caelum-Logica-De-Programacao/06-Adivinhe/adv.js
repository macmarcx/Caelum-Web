    /*     
    Sortear um número aleatório e comparar dentro da própria função se ele é igual ao valor mencionado pelo usuário.
    */
    //Sortear um Número
        let tentativas = 5

        function sortear(numero){
            while(tentativas > 0){

            // Entrada de dados
            let palpite = parseInt(numero)

            // TODO: validar a entrada de dados
            if(palpite < 1 || palpite > 10 || isNaN(palpite)){
                alert("Por favor, digite um número entre 1 e 10")
                return
            }

            let numeroSorteado = parseInt(Math.random()*10+1)

            // Compara o valor sorteado com o valor informado pelo usuário 
            if(numero == numeroSorteado){
                mostra(`
                    <hr>
                    Você Acertou!
                    `)
                    // Não decrementa o contador, dando assim uma tentativa
                    // a mais para o cliente
                    break
                    // Força a saída do Loop
                    //return tentativas = 0
            }else{
                mostra(`
                    <hr>
                    Você Errou! O número era ${numeroSorteado}. 
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

            // função break do While faz com que ele interrompa a execução do clico desse loop
            break
            }
        }
        

    

