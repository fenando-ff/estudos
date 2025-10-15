function calcularSoma() {
  let numero1 = parseFloat(document.getElementById('numero1').value);
  let numero2 = parseFloat(document.getElementById('numero2').value);
  let operacao = document.getElementById('operacao').value;

  if (isNaN(numero1) || isNaN(numero2)) {
    document.getElementById('Resultado').innerHTML = 'Por favor, insira dois números válidos.';
    return;
  }

  let resultado;
  switch (operacao) {
    case 'soma':
      resultado = numero1 + numero2;
      break;
    case 'subtracao':
      resultado = numero1 - numero2;
      break;
    case 'multiplicacao':
      resultado = numero1 * numero2;
      break;
    case 'divisao':
      if (numero2 === 0) {
        document.getElementById('Resultado').innerHTML = 'Não é possível dividir por zero.';
        return;
      }
      resultado = numero1 / numero2;
      break;
    default:
      document.getElementById('Resultado').innerHTML = 'Operação inválida.';
      return;
  }

  document.getElementById('Resultado').innerHTML = `O resultado da ${operacao} entre ${numero1} e ${numero2} é ${resultado}`;
}
