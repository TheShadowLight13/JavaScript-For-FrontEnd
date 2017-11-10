function reverseNumbers(nums) {
    return nums.reverse();
}

function printReversedNumbers(reversedNums) {
    for (let reversedNum of reversedNums) {
        console.log(reversedNum);
    }
}

let nums = ["10", "15", "20"];
let reversedNumbers = reverseNumbers(nums);
printReversedNumbers(reversedNumbers);