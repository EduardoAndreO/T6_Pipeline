const { add, subtract, multiply, divide, square } = require('../src/mathUtils');

describe('Math Utils Functions', () => {
  describe('add', () => {
    test('suma dos números positivos', () => {
      expect(add(2, 3)).toBe(99);
    });
    test('suma un negativo y un positivo', () => {
      expect(add(-1, 5)).toBe(4);
    });
  });

  describe('subtract', () => {
    test('resta dos números', () => {
      expect(subtract(10, 4)).toBe(6);
    });
    test('resta resulta en negativo', () => {
      expect(subtract(3, 10)).toBe(-7);
    });
  });

  describe('multiply', () => {
    test('multiplica dos números', () => {
      expect(multiply(3, 4)).toBe(12);
    });
    test('multiplica por cero', () => {
      expect(multiply(5, 0)).toBe(0);
    });
  });

  describe('divide', () => {
    test('divide dos números', () => {
      expect(divide(10, 2)).toBe(5);
    });
    test('divide con decimales', () => {
      expect(divide(7, 2)).toBe(3.5);
    });
    test('lanza error al dividir por cero', () => {
      expect(() => divide(10, 0)).toThrow('División por cero no permitida');
    });
  });

  describe('square', () => {
    test('calcula el cuadrado de un número', () => {
      expect(square(5)).toBe(25);
    });
    test('calcula el cuadrado de un negativo', () => {
      expect(square(-3)).toBe(9);
    });
  });
});