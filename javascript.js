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

export function caesarCipher(phrase, shift = 1) {
    let phraseArray = [...phrase];
    let result = ''

    phraseArray.forEach(letter => {
        let charCode = letter.charCodeAt(0);

        if (charCode >= 65 && charCode <= 90){
            if ((charCode + shift) < 65) { // goes below 65 (A)
                let val = 65 - (charCode + shift + 1)
                result = result += String.fromCharCode(90 - val);
            } else if ((charCode + shift) > 90) { // goes above 90 (Z)
                let val = (charCode + shift - 1) - 90; 
                result = result += String.fromCharCode(65 + val) 
            } else {
                let converted = String.fromCharCode(charCode + shift)
                result = result += converted
            }
        }
        else if (charCode >= 97 && charCode <= 122) {
            if ((charCode + shift) < 97) { // goes below 97 (a) 
                let val = 97 - (charCode + shift + 1);
                result = result += String.fromCharCode(122 - val);
            } else if ((charCode + shift) > 122) { // goes above 122 (z)
                let val = (charCode + shift - 1) - 122;
                result = result += String.fromCharCode(97 + val)
            } else {
                let converted = String.fromCharCode(charCode + shift);
                result = result += converted;
            }
        } else {
            result = result += letter;
        }
    })

    return result;
}

export function analyseArray(arr) {
    const length = arr.length;
    const min = Math.min(...arr)
    const max = Math.max(...arr)
    const average = findAverage(arr);

    return {"average": average, "min": min, "max": max, "length": length}
}

function findAverage(array) {
    let total = 0;
    let count = 0;

    array.forEach(element => {
        total += element;
        count++
    })

    return total / count;
}