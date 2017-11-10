function addRemoveElementsInArray(input) {
    let arr = [];
    for (let commandInfo of input) {
        let commandTokens = commandInfo.split(" ");
        let command = commandTokens[0];
        let arg = Number(commandTokens[1]);
        if (command === "add") {
            arr.push(arg);
        } else if (command === "remove" && arg < arr.length) {
            arr.splice(arg, 1);
        }
    }

    return arr;
}

function printArray(arr) {
    for (let number of arr) {
        console.log(number);
    }
}

let input = ["add 3", "add 5", "add 7"];
let arr = addRemoveElementsInArray(input);
printArray(arr);