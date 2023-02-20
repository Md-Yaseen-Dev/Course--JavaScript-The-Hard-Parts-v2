
function copyArraymultiplyby2(array) {
    const output = [];

    for (let i = 0; i < array.length; i++) {
        output.push(array[i] * 3)
    }

    return output;
}

const myArray = [2,4,6];
const result = copyArraymultiplyby2(myArray);


console.log(result);