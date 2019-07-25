function mostra(){

  let validaNome = nome.value 
  let validaEmail = email.value
  let validaCpf = cpf.value
  let validaComentar = comentar.value
  let textoValido = "Dados enviados com sucesso, agora é só aguardar que nossa equipe ira entrar em contato você em breve."

  if(validaNome && validaEmail && validaCpf && validaComentar){
    alert(textoValido)
  }
}