import { capitalise, reverseStr } from "./javascript.js";

test('Capitalise the first letter of a string', () => {
    expect(capitalise('potato')).toBe('Potato');
    expect(capitalise('straWberry')).toBe('Strawberry');
})

test('Reverse a string', () => {
    expect(reverseStr('string')).toBe('gnirts');
    expect(reverseStr('HeLlO')).toBe('OlLeH');
    expect(reverseStr('bob')).toBe('bob');
})