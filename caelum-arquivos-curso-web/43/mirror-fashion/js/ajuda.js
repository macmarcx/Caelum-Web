
/* Precisa corrigir a lógica */
if($("#nome, #email, #cpf, #comentar") == " "){
    $(document).ready(function(){
      $("#button-submit").click(function(){
        $("#demo").collapse('hide');
      });
    });
}else if ($("#nome, #email, #cpf, #comentar") != ""){
    $(document).ready(function(){
      $("#button-submit").click(function(){
        $("#demo").collapse('show');
      });
    });
}