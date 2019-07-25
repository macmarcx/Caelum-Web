// Função para pegar o número do cliente e
// retornar o número digitado 
// Obs: Trata número com ponto flutuante

function pegaNumero(mensagem){
    return parseFloat(prompt(mensagem).replace(",","."))
}

function pegaResultado(variavel){
    return variavel.toFixed(2).replace(".",",")
}

function calculaIMC(a,b){
    resultado = (b / (a * a))
    return resultado
}