//fibonacci con recursividad

function calcularFibonacciRec(n: number): number {
  let resultado: number = 0;
  if (n > 1) {
    resultado = calcularFibonacciRec(n - 1) + calcularFibonacciRec(n - 2);
  } else {
    resultado = n;
  }
  return resultado;
}

//fibonacci en forma secuencial

function calcularFibonacciSec(n: number): number {
  let resultado: number = 0;
  let indice: number, aux1: number, aux2: number;
  aux1 = 1;
  for (indice = 1; indice <= n; indice++) {
    aux2 = resultado;
    resultado = aux1;
    aux1 = aux2 + aux1;
  }
  return resultado;
}

console.log(calcularFibonacciRec(6));
console.log(calcularFibonacciSec(6));