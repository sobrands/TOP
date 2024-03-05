import sum from './sum';
import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from './index';

const calc = calculator();

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1,2)).toBe(3);
}); 

test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(sum(a + b)).not.toBe(0);
    }
  }
});

test('capitalize first letter', () => {
  expect(capitalize('bernado')).toMatch('Bernado');
});

test('reverse string', () => {
  expect(reverseString('hello')).toMatch('olleh');
});

test('addition', () => {
  expect(calc.add(3, 5)).toBe(8);
});

test('subtraction', () => {
  expect(calc.subtract(10, 8)).toBe(2);
});

test('multiply', () => {
  expect(calc.multiply(2, 7)).toBe(14);
});

test('divide', () => {
  expect(calc.divide(10, 5)).toBe(2);
});

test('cipher key shifting', () => {
  expect(caesarCipher('hello', 5)).toMatch('MJQQT');
})

test('analyze array', () => {
  expect(analyzeArray([1,8,3,4,2,6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
})