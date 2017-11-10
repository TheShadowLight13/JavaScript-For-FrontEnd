function getNegativeNumbersCount(numbers) {
    let negativeNumbersCount = 0;
    for (let num of numbers) {
        if (num < 0) {
            negativeNumbersCount++;
        }
    }

    return negativeNumbersCount;
}

function isHasZeroInNumbers(numbers) {
    for (let num of numbers) {
        if (num === 0) {
            return true;
        }
    }

    return false;
}

function convertInNumbers(nums) {
    let numbers = [];
    for (let num of nums) {
        let number = Number(num);
        numbers.push(number);
    }

    return numbers;
}

function isProductOfThreeNumbersPositive(nums) {
    let numbers = convertInNumbers(nums);
    let hasZeroInNumbers = isHasZeroInNumbers(numbers);
    if (hasZeroInNumbers) {
        return "Positive";
    }

    let negativeNumbersCount = getNegativeNumbersCount(numbers);
    if (negativeNumbersCount % 2 !== 0) {
        return "Negative";
    }
    
    return "Positive";
}

let input = ["-3", "-4", "5"];
let isProductNumbersPositive = isProductOfThreeNumbersPositive(input);
console.log(isProductNumbersPositive);
