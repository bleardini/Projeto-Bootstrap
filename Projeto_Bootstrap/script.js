// Newsletter
// $(document).ready(function(){
//     $("#myModal").modal("show")
// })

// Validação de CPF
function testaCPF() {
  var Soma;
  var Resto;
  Soma = 0;
  strCPF = document.getElementById("cpfCampo").value
if (strCPF == "00000000000") return false;

for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
Resto = (Soma * 10) % 11;

  if ((Resto == 10) || (Resto == 11))  Resto = 0; 
  if (Resto != parseInt(strCPF.substring(9, 10)) ){alert("CPF invalido") ;return false;}

Soma = 0;
  for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;

  if ((Resto == 10) || (Resto == 11))  Resto = 0;
  if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
  alert("CPF valido"); return true;
}