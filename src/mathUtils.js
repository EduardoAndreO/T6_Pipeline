/**
 * Suma dos números
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function add(a, b) {
  return a + b;
}

/**
 * Resta dos números
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplica dos números
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Divide dos números
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 * @throws {Error} Si b es 0
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error('División por cero no permitida');
  }
  return a / b;
}

/**
 * Calcula el cuadrado de un número
 * @param {number} n 
 * @returns {number}
 */
function square(n) {
  return n * n;
}

module.exports = { add, subtract, multiply, divide, square };