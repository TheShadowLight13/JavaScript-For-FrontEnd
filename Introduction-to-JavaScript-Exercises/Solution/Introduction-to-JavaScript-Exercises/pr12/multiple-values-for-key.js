function addKeyValuePairs(input) {
    let pairs = {};
    for (let i = 0; i < input.length - 1; i++) {
        let keyValueInfo = input[i];
        let keyValueTokens = keyValueInfo.split(" ");
        let key = keyValueTokens[0];
        let value = keyValueTokens[1];
        if (!(key in pairs)) {
            pairs[key] = [];
        }

        pairs[key].push(value);
    }

    return pairs;
}

function printValueForKey(pairs, input) {
    let inputLen = input.length - 1;
    let key = input[inputLen];
    let value;
    if (key in pairs) {
        value = pairs[key];
    } else {
        value = "None";
    }

    if (value !== "None") {
        for (let obj of value) {
            console.log(obj);
        }
    } else {
        console.log(value);
    }
}

let input = ["key value", "key eulav", "test tset", "key"];
let pairs = addKeyValuePairs(input);
printValueForKey(pairs, input);