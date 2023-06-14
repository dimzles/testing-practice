export function capitalise(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

export function reverseStr(str) {
    return str.split('').reverse().join('');
}

export const calculator = {
    add(a, b) {
        return a + b
    },

    subtract(a, b) {
        return a - b
    },

    divide(a, b) {
        return a / b
    },

    multiply(a, b) {
        return a * b
    }
}