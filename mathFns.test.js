import { Calculator } from "./mathFns";

const calc = new Calculator();

// Calculator.add tests
test('Returns the correct sum of two integers', () => {
  expect(calc.add(2, 2)).toBe(4);
})
test('Returns the correct sum of two decimal numbers', () => {
  expect(calc.add(2.05, .05)).toBe(2.1);
})

// Calculator.subtract tests
test('Returns the correct difference of two integers', () => {
  expect(calc.subtract(2, 2)).toBe(0);
})
test('Returns the correct difference of two decimal numbers', () => {
  expect(calc.subtract(2.05, .05)).toBe(2);
})

// Calculator.divide tests
test('Returns the correct quotient of two integers', () => {
  expect(calc.divide(2, 2)).toBe(1);
})
test('Returns the correct quotient of two decimal numbers', () => {
  expect(calc.divide(2.05, .05)).toBe(41);
})

// Calculator.multiply tests
test('Returns the correct product of two integers', () => {
  expect(calc.multiply(2, 2)).toBe(4);
})
test('Returns the correct product of two decimal numbers', () => {
  expect(calc.multiply(2.05, .05)).toBe(.1025);
})
