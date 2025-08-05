function somar(a, b) {
  if (b < 0) throw new Error('Somando deve ser positivo');
  return a + b;
}

function subtrair(a, b) {
  if (typeof b !== 'number') throw new Error('Subtraendo deve ser um número');
  if (b < 0) throw new Error('Subtraendo deve ser positivo');
  return a - b;
}

function multiplicar(a, b) {
  if (typeof b !== 'number') throw new Error('Multiplicando deve ser um número');
  if (b < 0) throw new Error('Multiplicando deve ser positivo');
  return a * b;
}

function dividir(a, b) {
  if (typeof b !== 'number') throw new Error('Divisor deve ser um número');
  if (b < 0) throw new Error('Divisor deve ser positivo');
  if (b === 0) throw new Error('Divisor não pode ser zero');
  return a / b;
}

function porcentagem(a, b) {
  return (a * b) / 100;
}

module.exports = { somar, subtrair, multiplicar, dividir, porcentagem };
