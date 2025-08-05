const { somar, subtrair, multiplicar, dividir, porcentagem } = require('./calculadora');

test('deve somar dois números corretamente', () => {
  expect(somar(5, 3)).toBe(8);
});

test ('deve fazer a porcentagem corretamente', () => {
  expect(porcentagem(100, 50)).toBe(50);
})
test('deve subtrair dois números corretamente', () => {
  expect(subtrair(10, 4)).toBe(6);
});

test('deve multiplicar dois números corretamente', () => {
  expect(multiplicar(4, 3)).toBe(12);
});

test('deve dividir dois números corretamente', () => {
  expect(dividir(9, 3)).toBe(3);
});

test('deve lançar erro ao dividir por zero', () => {
  expect(() => dividir(10, 0)).toThrow('Divisor não pode ser zero');
});

test('deve lançar erro ao subtrair por um número negativo', () => {
  expect(() => subtrair(10, -3)).toThrow('Subtraendo deve ser positivo');
});

test ('deve lançar erro ao subtrair por um numero indefinido', () => {
  expect(() => subtrair(10, undefined)).toThrow('Subtraendo deve ser um número');
})

test ('deve lançar erro ao multiplicar por um número negativo', () => {
  expect(() => multiplicar(10, -3)).toThrow('Multiplicando deve ser positivo');
});

test ('deve lançar erro ao multiplicar por um numero indefinido', () => {
  expect(() => multiplicar(10, undefined)).toThrow('Multiplicando deve ser um número');
})

test ('deve lançar erro ao somar por um numero negativo', () => {
  expect(() => somar(10, -3)).toThrow('Somando deve ser positivo');
});

test ('deve lançar erro ao dividir por um número negativo', () => {
  expect(() => dividir(10, -3)).toThrow('Divisor deve ser positivo');
});

test ('deve lançar um erro ao dividir por um numero indefinido', () => {
  expect(() => dividir(10, undefined)).toThrow('Divisor deve ser um número');
});