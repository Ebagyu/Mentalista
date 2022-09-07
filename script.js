var numeroSecreto = parseInt(Math.random() * 21);
var numeroTentativas = 2;

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  var elementoResultado = document.getElementById("resultado");

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Parabéns! Você acertou!";
  } else if (chute > 20 || chute < 0) {
    elementoResultado.innerHTML = "Por favor, digite somente de 0 a 20.";
  } else if (numeroTentativas > 0 && numeroSecreto > chute) {
    elementoResultado.innerHTML =
      "Errou, o número secreto é maior que esse. Você tem mais " +
      numeroTentativas +
      " tentativas";
    numeroTentativas--;
  } else if (numeroTentativas > 0) {
    elementoResultado.innerHTML =
      "Errou, o número secreto é menor, você tem mais " +
      numeroTentativas +
      " tentativas";
    numeroTentativas--;
  } else {
    elementoResultado.innerHTML =
      "Suas tentativas acabaram...O número secreto era: " + numeroSecreto;
  }
}

function Restart() {
  numeroTentativas = 2;
  numeroSecreto = parseInt(Math.random() * 21);
  var elementoResultado = document.getElementById("resultado");
  elementoResultado.innerHTML = "";
}