function copyarray(arr, instruction) {

    const output = [];

    for (i = 0; i < arr.length; i++) {

        output.push(instruction(arr[i]))
    }
    return output;
}

function multiplyby2(input) {
    return input * 2
}

const result = copyarray([1, 2, 3], multiplyby2);

console.log(result)