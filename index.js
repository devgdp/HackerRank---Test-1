/*Vezes que uma letra aparece*/

str = "É esperado que a função retorne um número inteiro";
console.log(str.split("e").length - 1);

/*HACKERRANK*/
function vezesLetraAparece(frase, letra) {
  // Escreva seu código aqui
  return frase.split(letra).length - 1;
}

function calculadoraAdicaoSubtracao(numero, outroNumero, operacao) {
  // Escreva seu código aqui
  var numero;
  var outroNumero;
  var operacao;

  if (operacao === "+") return numero + outroNumero;
  else if (operacao === "-") return numero - outroNumero;
  else operacao !== "+" || "-";
  return "Operação Inválida";
}
console.log(calculadoraAdicaoSubtracao(5, 40, "+"));

function somaDeGauss(numeroMaximo) {
  var total = 0;
  var intervalo = Array.from({ length: numeroMaximo }, (_, i) => i + 1);

  for (var i = total; i < intervalo.length; i++) {
    total += intervalo[i];
  }
  return total;
}

console.log(somaDeGauss(25));