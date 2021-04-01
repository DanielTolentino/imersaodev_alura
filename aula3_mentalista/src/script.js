var numeroSecreto = parseInt(Math.random() * 20)

var tentativas = 3

while (tentativas > 0){
  var numeroChute = parseInt(prompt("Digite um número de 0 e 20"))
  if (numeroSecreto == numeroChute)
    {alert ("Acertou!")
    break}
  else if (numeroChute > numeroSecreto)
    {alert ("O número secreto é menor")
      tentativas = tentativas - 1}
  else if (numeroChute < numeroSecreto)
    {alert ("O número secreto é maior")
      tentativas = tentativas - 1}  
  if (tentativas > 0){
    alert("Você tem mais " + tentativas + " tentativas!")}
    }

if (numeroChute != numeroSecreto) {
  document.write("<resultado> Errou! O número secreto era " + numeroSecreto + "</resultado>")
} else
  {
    document.write("<resultado> Acertou, o número secreto realmente era " + numeroSecreto + "</resultado>")
   
  }

// else {alert ("Errou! O número secreto era " + numeroSecreto)}          
// console.log - aparece no console e não na tela