function parseJSONIntoString(input) {
    let object = {};
    for (let line of input) {
        let lineTokens = line.split(" -> ");
        let key = lineTokens[0];
        let value;
        if (key === "age" || key === "grade") {
            value = Number(lineTokens[1]);
        } else {
            value = lineTokens[1];
        }

        object[key] = value;
    }

    return JSON.stringify(object);
}

let input = [
    "name -> Angel",
    "surname -> Georgiev",
    "age -> 20",
    "grade -> 6.00",
    "date -> 23/05/1995",
    "town -> Sofia"
];
let str = parseJSONIntoString(input);
console.log(str);