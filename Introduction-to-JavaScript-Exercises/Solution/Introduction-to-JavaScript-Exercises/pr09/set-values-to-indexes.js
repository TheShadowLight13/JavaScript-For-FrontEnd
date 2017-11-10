function setValuesToIndexesInArray(input) {
    let arrLength = Number(input[0]);
    let arr = new Array(arrLength).fill(0);
    for (let i = 1; i < input.length; i++) {
       let inputTokens =  input[i].split(" - ");
       let index = Number(inputTokens[0]);
       let value = Number(inputTokens[1]);
       arr[index] = value;
    }

    return arr;
}

function printArray(arr) {
    for (let number of arr) {
        console.log(number);
    }
}

let input = ["3", "0 - 5", "1 - 6", "2 - 7"];
let arr = setValuesToIndexesInArray(input);
printArray(arr);