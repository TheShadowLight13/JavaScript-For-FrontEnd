function multiplyDivideByNumber(nums) {
    let n = Number(nums[0]);
    let x = Number(nums[1]);

    let result = 0;
    if (x >= n) {
        result = n * x;
    } else {
        result = n / x;
    }

    return result;
}

let input = ["2", "3"];
let result = multiplyDivideByNumber(input);
console.log(result);