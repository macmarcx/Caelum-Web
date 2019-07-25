/*  
    Função que verifica se o botão Adulto+ é do tipo True ou False e inicia a função dentro do If
*/ 

function validar(){
    let idade = minhaIdade.checked
    if(idade == true){
        calculaAdulto()
    }else{
        calculaIMC()
    }    
}

function calculaIMC(){
    
    // Declarando Variaveis  
    let pesoCalc = parseFloatBrasil(campoAltura.value)
    let alturaCalc = parseFloatBrasil(campoPeso.value)
    let resultado = (alturaCalc / (pesoCalc * pesoCalc))
    let faixa

        // Atribui a variavel uma string informando que o checked é false
        idade = "Não"

        // Faixa de Peso
        // Acima de 40,00. Obesidade Grau III. Sinal vermelho! ...
        // 35,0 - 39.9. Obesidade Grau II. Sinal vermelho! ...
        // 30,0 - 34,9. Obesidade Grau I. Sinal de alerta! ...
        // 25,0 - 29,9. Sobrepeso/pré-obsidade. Atenção! ...
        // 18,6 - 24,9. Peso normal. ...
        // Abaixo de 18,5. Abaixo do peso.
        let faixaUm = (resultado < 17)
        let faixaDois = (resultado >= 17 && resultado <= 24.9)
        let faixatres = (resultado >= 25 && resultado <= 29.9)
        let faixaQuatro = (resultado >= 30 && resultado <= 34.9)
        let faixaCinco = (resultado >= 35 && resultado <= 39.9)
        let faixaSeis = (resultado > 40)
        if(faixaUm){
            faixa = "Faixa Um - Abaixo do Peso"
        }else if(faixaDois){
            faixa = "Faixa Dois - Peso Normal"
        }else if(faixatres){
            faixa = "Faixa Três - Sobrepeso/pré-obesidade"
        }else if(faixaQuatro){
            faixa = "Faixa Quatro - Obesidade Grau I"
        }else if(faixaCinco){
            faixa = "Faixa Cinco - Obesidade Grau II (severa)"
        }else if(faixaSeis){
            faixa = "Faixa Seis - Obesidade Grau III (mórbida)"
        }

    // Saída de dados
    return mostra(`
        <hr>
        Seu IMC é: ${resultado.toFixed(2).replace(".",",")} 
        <br><br>
        Você está na faixa: ${faixa}
        <br><br>
        É Adulto+ ${idade}
        <hr>
    `)
}

function calculaAdulto(){

    // Declarando Variaveis
    let pesoCalc = parseFloatBrasil(campoAltura.value)
    let alturaCalc = parseFloatBrasil(campoPeso.value)
    let resultado = (alturaCalc / (pesoCalc * pesoCalc))
    let faixa     
        
        // Atribui a variavel uma string informando que o checked é true
        idade = "Sim"

        // Faixa de Peso Adulto+
        // Acima de 27. Sobrepreso/pré-obesidade ...
        // 23 - 27. Obesidade Grau II. Sinal vermelho! ...
        // Abaixo de 22. Abaixo do Peso ...
        let faixaUm = (resultado < 22)
        let faixaDois = (resultado >= 23 && resultado <= 27)
        let faixatres = (resultado > 27)
    
        if(faixaUm){
            faixa = "Faixa Um(Adulto+) - Abaixo do Peso"
        }else if(faixaDois){
            faixa = "Faixa Dois(Adulto+) - Peso Adequado"
        }else if(faixatres){
            faixa = "Faixa Três(Adulto+) - Sobrepeso/pré-obesidade"
        }
    
    // Saída de dados
    return mostra(`
        <hr>
        Seu IMC é: ${resultado.toFixed(2).replace(".",",")} 
        <br><br>
        Você está na faixa: ${faixa}
        <br><br>
        É Adulto+ ${idade}
        <hr>
    `)
}