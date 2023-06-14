import { capitalise, reverseStr, calculator } from "./javascript.js";

test('Capitalise the first letter of a string', () => {
    expect(capitalise('potato')).toBe('Potato');
    expect(capitalise('straWberry')).toBe('Strawberry');
})

test('Reverse a string', () => {
    expect(reverseStr('string')).toBe('gnirts');
    expect(reverseStr('HeLlO')).toBe('OlLeH');
    expect(reverseStr('bob')).toBe('bob');
})

test('Calculator doing add/subtract/divide/multiply', () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.subtract(7, 5)).toBe(2);
    expect(calculator.divide(20, 5)).toBe(4);
    expect(calculator.multiply(5, 1)).toBe(5)
})