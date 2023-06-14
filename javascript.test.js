import { capitalise } from "./javascript.js";

test('Capitalise the first letter of a string', () => {
    expect(capitalise('potato')).toBe('Potato');
    expect(capitalise('straWberry')).toBe('Strawberry');
})