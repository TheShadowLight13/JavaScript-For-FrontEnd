function printNumbers(n) {
    let numbers = Number(n[0]);
    for (let i = numbers; i >= 1; i--) {
        console.log(i);
    }
}

let input = ["5"];
printNumbers(input);