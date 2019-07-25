 /*
            Função é uma das construções fundamentais da linguagem
            JavaScript, ou de qualquer outra linguagem de programação
            Ela é basicamente um conjunto de instruções, que
            1. Executar uma atiividade
            2. Efetuar um cálculo e retornar um resultado
            Ela é basicamente 
        */

        // 1. Função simples
        
        // Dentro dos colchetes está sendo passado dois parâmetros
        /*
        function hello(nome, sobrenome){
            console.log("hello World, " + nome + " " + sobrenome)    
        }

        let nomePessoa = prompt("Qual seu nome")
        let sobrenomePessoa = prompt("Qual o seu sobrenome")

        // Dentro da chamada da função está sendo informado os argumentos
        hello(nomePessoa, sobrenomePessoa)
        */

        // 2. Função que retorna um valor

        // Dentro dos colchetes está sendo passado um parâmetro
        function raizQuadrada(numero){

            // Cálcula a raiz quadrada
            raiz = Math.sqrt(numero)

            // Retorna o valor da raiz quadrada
            return raiz
        }

        // Entrada de dados na tela
        let valor = parseFloat(prompt("Digite o valor: "))
        // Variavel que chama a função
        let resultado = raizQuadrada(valor)
        
        // Saída de dados na tela
        console.log("A raiz quadrada de " + valor + " é " + resultado)
        
        