import { capitalise, reverseStr, calculator, caesarCipher, analyseArray } from "./javascript.js";

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

test('Caesar cipher function test', () => {
    expect(caesarCipher('hello world!')).toBe('ifmmp xpsme!')
    expect(caesarCipher('hello world!', 5)).toBe('mjqqt btwqi!')
    expect(caesarCipher('HELLO world!')).toBe('IFMMP xpsme!')
})

test('Analyse array and return object containing avg, min, max & length', () => {
    expect(analyseArray([1,8,3,4,2,6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
}) 